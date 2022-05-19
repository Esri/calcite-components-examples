import { Scale } from "../interfaces";
export declare class Avatar {
  el: HTMLCalciteAvatarElement;
  /** specify the scale of the avatar, defaults to m */
  scale: Scale;
  /** src to an image (remember to add a token if the user is private) */
  thumbnail: string;
  /** full name of the user */
  fullName: string;
  /** user name */
  username: string;
  /** unique id for user */
  userId: string;
  render(): any;
  /** True if thumnail fails to load */
  error: boolean;
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
