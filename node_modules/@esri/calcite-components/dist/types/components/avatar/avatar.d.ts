import { Scale } from "../interfaces";
export declare class Avatar {
  el: HTMLCalciteAvatarElement;
  /** Specifies the size of the component. */
  scale: Scale;
  /** Specifies the `src` to an image (remember to add a token if the user is private). */
  thumbnail: string;
  /** Specifies the full name of the user. */
  fullName: string;
  /** Specifies the username of the user. */
  username: string;
  /** Specifies the unique id of the user. */
  userId: string;
  render(): any;
  thumbnailFailedToLoad: boolean;
  private determineContent;
  /**
   * Generate a valid background color that is consistent and unique to this user
   */
  private generateFillColor;
  /**
   * Use fullname or username to generate initials
   */
  private generateInitials;
}
