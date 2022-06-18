import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import Footer from "./Footer";

describe("test Footer", () => {
    it("check Footer component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Footer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("check Footer submit button that its not empty", () => {
        const component = create(<Footer />);
        const instance = component.root;
        const button = instance.findByType("button");
        expect(button.children.length).toBe(1);
    })
})