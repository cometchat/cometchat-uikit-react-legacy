import { BaseStyles } from "../..";
/**
 * @class ActionSheetStyle
 * @param {String} width
 * @param {String} height
 * @param {String} border
 * @param {String} borderRadius
 * @param {String} background
 * @param {String} layoutModeIconTint
 * @param {String} titleFont
 * @param {String} titleColor
 */

class ActionSheetStyle extends BaseStyles {
  constructor({
    layoutModeIconTint = "",
    titleFont = "",
    titleColor = "",

    width = "295px",
    height = "350px",
    background = "",
    border = "",
    borderRadius = "8px",
    activeBackground = "",
  }) {
    super({
      width,
      height,
      background,
      activeBackground,
      border,
      borderRadius,
    });

    this.layoutModeIconTint = layoutModeIconTint;
    this.titleFont = titleFont;
    this.titleColor = titleColor;
  }
}
export { ActionSheetStyle };