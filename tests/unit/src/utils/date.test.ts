import { describe, it, expect } from "vitest";
import { calculateDuration, formatPostDate } from "@/utils/date";

describe("Date Utils functions", () => {
  describe("calculateDuration function", () => {
    it("Only 1 year", () => {
      const result: string = calculateDuration("2022-06", "2023-06");
      expect(result).toBe("1 year");
    });

    it("Only 1 month", () => {
      const result: string = calculateDuration("2023-05", "2023-06");
      expect(result).toBe("1 month");
    });

    it("Multiple years and 1 month", () => {
      const result: string = calculateDuration("2020-01", "2023-02");
      expect(result).toBe("3 years 1 month");
    });

    it("Multiple years and multiple months", () => {
      const result: string = calculateDuration("2018-01", "2020-03");
      expect(result).toBe("2 years 2 months");
    });

    it("End date as 'Present'", () => {
      const result: string = calculateDuration("2020-01", "Present");
      const currentDate: Date = new Date();
      const expectedYears: number = currentDate.getFullYear() - 2020;
      const expectedMonths: number = currentDate.getMonth();

      const yearText: string = expectedYears === 1 ? "year" : "years";
      const monthText: string = expectedMonths === 1 ? "month" : "months";

      const expectedText: string =
        expectedMonths > 0
          ? `${expectedYears} ${yearText} ${expectedMonths} ${monthText}`
          : `${expectedYears} ${yearText}`;

      expect(result).toBe(expectedText);
    });

    describe("Edge cases", () => {
      it("Zero duration (same start and end date)", () => {
        const result: string = calculateDuration("2023-05", "2023-05");
        expect(result).toBe("");
      });

      it("Less than a month difference", () => {
        const result: string = calculateDuration("2023-05-15", "2023-05-20");
        expect(result).toBe("");
      });

      it("Negative duration (start date after end date)", () => {
        const result: string = calculateDuration("2024-06", "2023-06");
        expect(result).toBe("");
      });

      it("Start month greater than end month (1 year 4 months)", () => {
        const result: string = calculateDuration("2022-10", "2024-03");
        expect(result).toBe("1 year 5 months");
      });

      it("Start month greater than end month (2 years 3 months)", () => {
        const result: string = calculateDuration("2020-11", "2023-02");
        expect(result).toBe("2 years 3 months");
      });

      it("Start month greater than end month (1 month case)", () => {
        const result: string = calculateDuration("2019-12", "2021-01");
        expect(result).toBe("1 year 1 month");
      });
    });
  });

  describe("formatPostDate function", () => {
    it("formats a valid date string correctly", () => {
      const result: string = formatPostDate("2023-06-15");
      expect(result).toBe("Jun 15, 2023");
    });

    it("formats a date with single digit day", () => {
      const result: string = formatPostDate("2023-12-01");
      expect(result).toBe("Dec 01, 2023");
    });

    it("formats a date with single digit month", () => {
      const result: string = formatPostDate("2023-01-25");
      expect(result).toBe("Jan 25, 2023");
    });

    it("formats January date correctly", () => {
      const result: string = formatPostDate("2023-01-15");
      expect(result).toBe("Jan 15, 2023");
    });

    it("formats December date correctly", () => {
      const result: string = formatPostDate("2023-12-31");
      expect(result).toBe("Dec 31, 2023");
    });

    it("formats leap year date correctly", () => {
      const result: string = formatPostDate("2024-02-29");
      expect(result).toBe("Feb 29, 2024");
    });

    it("formats date with ISO format", () => {
      const result: string = formatPostDate("2023-06-15T10:30:00.000Z");
      expect(result).toBe("Jun 15, 2023");
    });

    describe("Edge cases", () => {
      it("handles different year formats", () => {
        const result: string = formatPostDate("2000-01-01");
        expect(result).toBe("Jan 01, 2000");
      });

      it("handles future dates", () => {
        const result: string = formatPostDate("2030-12-25");
        expect(result).toBe("Dec 25, 2030");
      });

      it("handles past dates", () => {
        const result: string = formatPostDate("1990-07-04");
        expect(result).toBe("Jul 04, 1990");
      });
    });
  });
});
