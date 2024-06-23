import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import Landing from "../app/components/Landing";
import PostMeta from "../app/components/PostMeta";

describe("Home", () => {
  it("renders a link", () => {
    render(<Home />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
});

describe("Blog", () => {
  it("navigation to blog page 1", () => {
    render(<Landing />);

    expect(
      screen.getByRole("link", { name: "ITHS Blog Project" })
    ).toHaveAttribute("href", "/blog/1");
  });
});

describe("PostMeta", () => {
  it("renders correct meta data", () => {
    render(<PostMeta postData={{ likes: 200, views: 200 }} />);

    const content = screen.getByText("Views: 200, Likes: 200");

    expect(content).toBeInTheDocument();
  });
});
