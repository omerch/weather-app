import { fireEvent } from "@testing-library/dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Form from "./Form";

let container = null 

beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

describe("<Form />", () => {
    // check if components exists
    it("renders correctly", () => {
        const {queryByTestId, queryByPlaceholderCity, queryByPlaceholderCountry} = render(<Form />)
        
        expect(queryByTestId('city-change')).toBeTruthy()
        expect(queryByPlaceholderCity('country-change')).toBeTruthy()
        expect(queryByPlaceholderCountry('search-button')).toBeTruthy()
    });
    
    // dummy request for input
    it("updates on Change", () => {
        const {queryByPlaceholderCity, queryByPlaceholderCountry} = render(<Form />)

        const searchInputCity = queryByPlaceholderCity('city-change');
        const searchInputCountry = queryByPlaceholderCountry('country-change');

        fireEvent.change(searchInputCity, {target: {value: "testcity"}})
        fireEvent.change(searchInputCountry, {target: {value: "testcountry"}})

        expect(searchInputCity.value).toBe("testcity")
        expect(searchInputCountry.value).toBe("testcountry")
    });

})