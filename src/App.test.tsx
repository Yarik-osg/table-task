import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import Home from "./Components/Home";
import TableShow from "./Components/Table";
import userEvent from "@testing-library/user-event";
import {Table} from "antd";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import Sidebar from "./Components/Sidebar";

/**
 * We are using global.matchMedia to work with and-design components
 */
global.matchMedia = global.matchMedia || function () {
    return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

describe("React", () => {
    /**
     * Checks render our home page component
     */
    test('should render the Home component', () => {
        render(<Home/>);
        expect(screen.getByText(/Hello, dear people, who are checking my test task./i)).toBeInTheDocument();
        expect(screen.getByText(/Now, you are on the home page called "Home"/i)).toBeInTheDocument();
        expect(screen.getByText(/If you want to see the tablet I made, on the topic of "Star Wars" click on the button on the sidebar "Table" to view it./i)).toBeInTheDocument();
        expect(screen.getByText(/You can search by name, or sort each column in descending or ascending order/i)).toBeInTheDocument();
    });
    /**
     * Checks render our sidebar page component
     */
    test("should render the sidebar", () => {
        const history = createMemoryHistory();
        const {container, getByTestId} = render(
            <Router history={history}>
                <Sidebar/>
            </Router>
        );
        const table = getByTestId("table");
        const spanTable = getByTestId("span-table");
        const home = getByTestId("home");
        const spanHome = getByTestId("span-home");
        expect(container.innerHTML).toMatch(/Home/i);
        expect(table).toContainElement(spanTable);
        expect(home).toContainElement(spanHome);
    });
    /**
     * Checks render our app  component
     */
    test("should render the App", () => {
        const history = createMemoryHistory();
        const {container, getByTestId} = render(
            <Router history={history}>
                <App/>
            </Router>
        );
        const app = getByTestId("app-div");
        const content = getByTestId("content-div");
        expect(container.innerHTML).toMatch(/Home/i);
        expect(app).toContainElement(content);
    });
    /**
     * Checks if working navigating to the home page
     */
    test("should navigate to the home", async () => {
        const history = createMemoryHistory();
        const {container, getByTestId} = render(
            <Router history={history}>
                <Sidebar/>
            </Router>
        );
        fireEvent.click(getByTestId("home"))
        expect(container.innerHTML).toMatch(/Home/i);

    });
})
describe("events", () => {
    /**
     * Checks if button click working
     */
    it("button click", async () => {
        const {getByTestId} = render(<TableShow/>);
        const button = getByTestId("button");
        expect(button).not.toBeChecked()
        expect(fireEvent.click(button))
        expect(button.textContent).toBe("Search")

    })
    /**
     * Checks if input working
     */
    test("input", () => {
        const {getByTestId} = render(<TableShow/>);
        const input = getByTestId("input");
        expect(input).not.toHaveFocus()
        input.focus()
        expect(input).toHaveFocus()
    })
})