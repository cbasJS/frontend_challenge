import { calculateDate, getParam, nFormatter, urlTypeParams } from "@/application/utils/general.util";
import "@testing-library/jest-dom";

// @ts-ignore
delete global.window.location;
global.window = Object.create(window);
// @ts-ignore
global.window.location = {};

describe("nFormatter method", () => {
  it("number is equal to 1,000", () => {
    const result = nFormatter(1000)
    expect(result).toBe("1k")
  });

  it("number is equal to 0", () => {
    const result = nFormatter(0)
    expect(result).toBe("0")
  });
});

describe("calculateDate method", () => {
  it("current date is greater than one week ago", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-05-02"))
    const result = calculateDate("2024-06-02T17:19:42Z")
    expect(result).toMatchObject({ "large": "Updated 4 weeks ago", "short": "4w" })
  });

  it("current date is equal one week ago", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-05-26T17:19:42Z"))
    const result = calculateDate("2024-06-02T17:19:42Z")
    expect(result).toMatchObject({ "large": "Updated 1 week ago", "short": "1w" })
  });

  it("current date is greather than one day ago", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-05-31T17:19:42Z"))
    const result = calculateDate("2024-06-02T17:19:42Z")
    expect(result).toMatchObject({ "large": "Updated 2 days ago", "short": "2d" })
  });

  it("current date is equal one day ago", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-06-01T17:19:42Z"))
    const result = calculateDate("2024-06-02T17:19:42Z")
    expect(result).toMatchObject({ "large": "Updated 1 day ago", "short": "1d" })
  });

  it("current date is greater than one hour ago", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-06-02T12:19:42Z"))
    const result = calculateDate("2024-06-02T17:19:42Z")
    expect(result).toMatchObject({ "large": "Updated 5 hours ago", "short": "5h" })
  });

  it("current date is equal one hour ago", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-06-02T16:19:42Z"))
    const result = calculateDate("2024-06-02T17:19:42Z")
    expect(result).toMatchObject({ "large": "Updated 1 hour ago", "short": "1h" })
  });

  it("current date is greather than one minute ago", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-06-02T17:17:42Z"))
    const result = calculateDate("2024-06-02T17:19:42Z")
    expect(result).toMatchObject({ "large": "Updated 2 minutes ago", "short": "2m" })
  });

  it("current date is equal one minute ago", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-06-02T17:18:42Z"))
    const result = calculateDate("2024-06-02T17:19:42Z")
    expect(result).toMatchObject({ "large": "Updated 1 minute ago", "short": "1m" })
  });

});

describe("urlTypeParams", () => {
  it("param type from URL is equal to all", () => {
    window.location.search = "?type=all";
    const paramValue = urlTypeParams()
    expect(paramValue).toBe("all")
  })

  it("when param type from URL doesnt exist", () => {
    window.location.search = "";
    const paramValue = urlTypeParams()
    expect(paramValue).toBe("all")
  })
})

describe("getParam method", () => {
  it("param page from URL is equal to 2", () => {
    const URL = "https://api.github.com/orgs/facebook/repos?sort=updated&per_page=30&direction=desc&type=all&page=2"
    const pageParam = getParam(URL, 'page')
    expect(pageParam).toBe("2")
  })
})
