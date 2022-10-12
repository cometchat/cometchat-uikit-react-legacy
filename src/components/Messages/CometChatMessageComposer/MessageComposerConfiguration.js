import roundedPlus from "./resources/add-circle-filled.svg";
import insertEmoticon from "./resources/emoji.svg";
import sendBtn from "./resources/send-message.svg";

import closeButton from "./resources/close-circle.svg";

import { MessageComposerStyles } from "../";

import { MessagePreviewConfiguration } from "../CometChatMessagePreview/MessagePreviewConfiguration";

import { EmojiKeyboardConfiguration } from "../CometChatEmojiKeyboard/EmojiKeyboardConfiguration";

import { CreatePollConfiguration } from "../CometChatCreatePoll/CreatePollConfiguration";

import { StickerKeyboardConfiguration } from "../CometChatStickerKeyboard/StickerKeyboardConfiguration";

import { ActionSheetConfiguration } from "../../Shared";

/**
 * @class MessageComposerConfiguration
 * @description MessageComposerConfiguration class is used for defining the MessageComposer templates.
 * @param {String} sendButtonIconURL
 * @param {String} attachmentIconURL
 * @param {String} stickerIconURL
 * @param {String} stickerCloseIconURL
 * @param {String} emojiIconURL
 * @param {String} customOutgoingMessageSound
 * @param {Boolean} hideAttachment
 * @param {Boolean} hideLiveReaction
 * @param {Boolean} hideEmoji
 * @param {Boolean} showSendButton
 * @param {Boolean} enableSoundForMsg
 * @param {Boolean} enableTyping
 * @param {Function} onSendButtonClick
 * @param {Array} messageTypes
 * @param {Array} excludeMessageTypes
 * @param {Object} style
 */

class MessageComposerConfiguration {
  constructor({
    hideAttachment = false,
    attachmentIconURL = roundedPlus,
    stickerCloseIconURL = closeButton,
    hideLiveReaction = false,
    hideEmoji = false,
    emojiIconURL = insertEmoticon,
    showSendButton = true,
    sendButtonIconURL = sendBtn,
    onSendButtonClick = null,
    messageTypes = null,
    excludeMessageTypes = null,
    enableTypingIndicator = true,
    enableSoundForMessages = true,
    customOutgoingMessageSound = null,
    style = new MessageComposerStyles({}),
    messagePreviewConfiguration = new MessagePreviewConfiguration({}),
    emojiKeyboardConfiguration = new EmojiKeyboardConfiguration({}),
    stickerKeyboardConfiguration = new StickerKeyboardConfiguration({}),
    createPollConfiguration = new CreatePollConfiguration({}),
    actionSheetConfiguration = new ActionSheetConfiguration({}),
  }) {
    this.sendButtonIconURL = sendButtonIconURL;
    this.attachmentIconURL = attachmentIconURL;
    this.stickerCloseIconURL = stickerCloseIconURL;
    this.hideAttachment = hideAttachment;
    this.hideLiveReaction = hideLiveReaction;
    this.hideEmoji = hideEmoji;
    this.emojiIconURL = emojiIconURL;
    this.showSendButton = showSendButton;
    this.onSendButtonClick = onSendButtonClick;
    this.messageTypes = messageTypes;
    this.customOutgoingMessageSound = customOutgoingMessageSound;
    this.enableSoundForMessages = enableSoundForMessages;
    this.enableTypingIndicator = enableTypingIndicator;
    this.excludeMessageTypes = excludeMessageTypes;
    this.style = new MessageComposerStyles(style ?? {});
    this.messagePreviewConfiguration = new MessagePreviewConfiguration(messagePreviewConfiguration ?? {});
    this.emojiKeyboardConfiguration = new EmojiKeyboardConfiguration(emojiKeyboardConfiguration ?? {});
    this.stickerKeyboardConfiguration = new StickerKeyboardConfiguration(stickerKeyboardConfiguration ?? {});
    this.createPollConfiguration = new CreatePollConfiguration(createPollConfiguration ?? {});
    this.actionSheetConfiguration = new ActionSheetConfiguration(actionSheetConfiguration ?? {});
  }
}

export { MessageComposerConfiguration };