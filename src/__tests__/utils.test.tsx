import { formatDate } from "../toolkit/utils";

describe("testing utils", () => {
  it("should format date", () => {
    const originalDate: string = "Tue Jun 28 2022";
    const expectedDate: string = "12:00 AM 28 Jun";
    const calculatedDate: string = formatDate(originalDate);

    //assert
    expect(calculatedDate).toBe(expectedDate);
  });
});
