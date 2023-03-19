import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server"

test("Logo should load on rendering header", () => {

    // Load Header
    const header = render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>);
    const logo = header.getAllByTestId("logo");
    // check if logo is loaded
    expect(logo[0].src).toBe("http://localhost/dummyLogo.js");
})

test("Online status should be green on rendering", () => {
    // Load Header
    const header = render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>);
    const status = header.getByTestId("online-status");
    // check if online status is green
    expect(status.innerHTML).toBe("🟢");
})

test("Cards should have 0 items", () => {
    // Load Header
    const header = render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>);
    const cart = header.getByTestId("cart");
    // check if online status is green
    expect(cart.innerHTML).toBe("Cart 0");
})