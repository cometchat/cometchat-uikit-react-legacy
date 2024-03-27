import { AIOptionsStyle, CreatePollStyle, MessageComposerStyle } from "@cometchat/uikit-shared";
import { ActionSheetStyle, EmojiKeyboardStyle, MediaRecorderStyle, PopoverStyle, PreviewStyle, TextInputStyle } from "@cometchat/uikit-elements";
import { CometChatTheme } from "@cometchat/uikit-resources";
import { CSSProperties } from "react";
export declare const LIVE_REACTION_ICON_TINT = "red";
export type mentionIconStyleType = CSSProperties | {
    buttonTextFont: string;
    buttonTextColor: string;
    buttonIconTint: string;
    iconBackground: string;
    iconHeight: string;
    iconWidth: string;
};
export declare function getMessageComposerStyle(messageComposerStyle: MessageComposerStyle | undefined, theme: CometChatTheme): CSSProperties;
export declare function previewStyle(messageComposerStyle: MessageComposerStyle | undefined, theme: CometChatTheme): PreviewStyle;
export declare function getMentionsViewStyle(): CSSProperties;
export declare function getMentionInfoIconStyle(messageComposerStyle: MessageComposerStyle | undefined, theme: CometChatTheme, mentionsWarningStyle: React.CSSProperties): mentionIconStyleType;
export declare function textInputStyle(messageComposerStyle: MessageComposerStyle | undefined, theme: CometChatTheme): TextInputStyle;
export declare function liveReactionButtonStyle(): {
    height: string;
    width: string;
    border: string;
    borderRadius: string;
    buttonIconTint: string;
    background: string;
    padding: string;
};
export declare function sendButtonStyle(messageComposerStyle: MessageComposerStyle | undefined, theme: CometChatTheme, isDisabled?: boolean): {
    height: string;
    width: string;
    border: string;
    borderRadius: string;
    buttonIconTint: string | undefined;
    background: string;
    padding: string;
};
export declare function liveReactionButtonDivStyle(): CSSProperties;
export declare function fileMediaPickerStyle(): CSSProperties;
export declare function secondaryViewStyle(): CSSProperties;
export declare function primaryViewStyle(): CSSProperties;
export declare function auxiliaryViewStyle(): CSSProperties;
export declare function createPollStyle(theme: CometChatTheme): CreatePollStyle;
export declare function attachmentPopoverStyle(actionSheetStyle: ActionSheetStyle | undefined, theme: CometChatTheme): PopoverStyle;
export declare function AIPopoverStyle(aiOptionsStyle: AIOptionsStyle | undefined, theme: CometChatTheme): PopoverStyle;
export declare function actionSheetContainerStyle(actionSheetStyle: ActionSheetStyle | undefined, theme: CometChatTheme): CSSProperties;
export declare function AIActionSheetContainerStyle(aiActionSheetStyle: AIOptionsStyle | undefined, theme: CometChatTheme): CSSProperties;
export declare function getActionSheetStyle(actionSheetStyle: ActionSheetStyle | undefined, theme: CometChatTheme): ActionSheetStyle;
export declare function getAIActionSheetStyle(aiOptionsStyle: AIOptionsStyle, theme: CometChatTheme): ActionSheetStyle;
export declare function attachmentButtonStyle(messageComposerStyle: MessageComposerStyle | undefined, theme: CometChatTheme, isSecondaryContentDisplayed: boolean): {
    height: string;
    width: string;
    border: string;
    borderRadius: string;
    padding: string;
    buttonIconTint: string | undefined;
    background: string;
};
export declare function aiButtonStyle(messageComposerStyle: MessageComposerStyle | undefined, theme: CometChatTheme, isSecondaryContentDisplayed: boolean): {
    height: string;
    width: string;
    border: string;
    borderRadius: string;
    padding: string;
    buttonIconTint: string | undefined;
    background: string;
};
export declare function emojiKeyboardPopoverStyle(): PopoverStyle;
export declare function emojiKeyboardContainerStyle(theme: CometChatTheme): CSSProperties;
export declare function emojiKeyboardStyle(messageComposerStyle: MessageComposerStyle | undefined, theme: CometChatTheme): EmojiKeyboardStyle;
export declare function emojiButtonStyle(messageComposerStyle: MessageComposerStyle | undefined, theme: CometChatTheme, isAuxiliaryContentDisplayed: boolean, applyHorizontalMargin?: boolean): {
    height: string;
    width: string;
    border: string;
    borderRadius: string;
    buttonIconTint: string | undefined;
    background: string;
    padding: string;
};
export declare function voiceRecordingPopoverStyle(): PopoverStyle;
export declare function voiceRecordingContainerStyle(theme: CometChatTheme): CSSProperties;
export declare function voiceRecordingStyle(mediaRecorderStyle: MediaRecorderStyle | undefined, theme: CometChatTheme): EmojiKeyboardStyle;
export declare function voiceButtonStyle(messageComposerStyle: MessageComposerStyle | undefined, theme: CometChatTheme, isAuxiliaryContentDisplayed: boolean, applyHorizontalMargin?: boolean): {
    margin?: string | undefined;
    height: string;
    width: string;
    border: string;
    borderRadius: string;
    buttonIconTint: string | undefined;
    background: string;
};
export declare function defaultAuxiliaryViewContainer(): CSSProperties;
export declare function messageComposerHeaderStyle(): CSSProperties;
