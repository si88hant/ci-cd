import { test, describe, expect } from "@playwright/test";

describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo.",
      ),
    ).toBeVisible();
  });

  test("pokemon page can be navigated to", async ({ page }) => {
    await page.goto("");
    // Find the link or text for ivysaur and click it
    await page.getByText("ivysaur").click();
    // Check that the app navigated and displays the ability "chlorophyll"
    await expect(page.getByText("chlorophyll")).toBeVisible();
  });
});
