import {describe} from "vitest";
import {queryByRole, render, screen, within} from "@testing-library/react";
import {SimplePost} from "./SimplePost";


describe("SimplePost test suite", () => {
  it("Should render correctly - no likes", () => {
    const user = "Karl";
    const content = "Some content";
    render(<SimplePost content={content} user={user} />);
    const theContainer = screen.getByTestId("post-container");
    expect(theContainer).toBeInTheDocument();
    const userHead = screen.getByRole("heading");
    expect(userHead).toBeInTheDocument();
    expect(userHead).toHaveTextContent(user);
    const para = screen.getByRole("paragraph");
    expect(para).toBeInTheDocument();
    expect(para).toHaveTextContent(content);
    const likeList = queryByRole(theContainer, "list");
    expect(likeList).not.toBeInTheDocument();
  });

  it("Should render correctly - with likes", () => {
    const user = "Karl";
    const content = "Some content";
    const someLikes = ['Karl', 'Mary'];
    render(<SimplePost
      content={content}
      user={user}
      likesBy={someLikes}
    />);
    const theContainer = screen.getByTestId("likes-container");
    expect(theContainer).toBeInTheDocument();
    const likeList = queryByRole(theContainer, "list");
    expect(likeList).toBeInTheDocument();
    const likes = within(theContainer).getAllByRole("listitem");
    expect(likes).toHaveLength(2);
    someLikes.forEach((like, index) => {
      expect(likes[index]).toHaveTextContent(like);
    });
  });

});