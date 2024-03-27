import { BaseStyle, FileBubbleStyle, ImageBubbleStyle, TextBubbleStyle } from "@cometchat/uikit-elements";
import { CardBubbleStyle, FormBubbleStyle, SchedulerBubbleStyle, CometChatMentionsTextFormatter, CometChatTextFormatter, CometChatUrlTextFormatter } from "@cometchat/uikit-shared";
import { CardMessage, CometChatActionsIcon, CometChatActionsView, CometChatDetailsTemplate, CometChatMessageComposerAction, CometChatMessageTemplate, CometChatTheme, FormMessage, MessageBubbleAlignment, SchedulerMessage } from "@cometchat/uikit-resources";
import { AIOptionsStyle } from "@cometchat/uikit-shared";
import { DataSource } from "./DataSource";
export declare abstract class DataSourceDecorator implements DataSource {
    dataSource: DataSource;
    constructor(dataSource: DataSource);
    getTextMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, theme: CometChatTheme, group?: CometChat.Group): Array<CometChatActionsIcon | CometChatActionsView>;
    getImageMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, theme: CometChatTheme, group?: CometChat.Group): Array<CometChatActionsIcon | CometChatActionsView>;
    getVideoMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, theme: CometChatTheme, group?: CometChat.Group): Array<CometChatActionsIcon | CometChatActionsView>;
    getAudioMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, theme: CometChatTheme, group?: CometChat.Group): Array<CometChatActionsIcon | CometChatActionsView>;
    getFileMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, theme: CometChatTheme, group?: CometChat.Group): Array<CometChatActionsIcon | CometChatActionsView>;
    getBottomView(message: CometChat.BaseMessage, alignment: MessageBubbleAlignment): any;
    getTextMessageContentView(message: CometChat.TextMessage, alignment: MessageBubbleAlignment, theme: CometChatTheme, additionalConfigurations?: any): any;
    getImageMessageContentView(message: CometChat.MediaMessage, alignment: MessageBubbleAlignment, theme: CometChatTheme): any;
    getVideoMessageContentView(message: CometChat.MediaMessage, alignment: MessageBubbleAlignment, theme: CometChatTheme): any;
    getAudioMessageContentView(message: CometChat.MediaMessage, alignment: MessageBubbleAlignment, theme: CometChatTheme): any;
    getFileMessageContentView(message: CometChat.MediaMessage, alignment: MessageBubbleAlignment, theme: CometChatTheme): any;
    getFormMessageContentView(message: FormMessage, alignment: MessageBubbleAlignment, theme: CometChatTheme): any;
    getSchedulerMessageContentView(message: SchedulerMessage, alignment: MessageBubbleAlignment, theme: CometChatTheme): any;
    getCardMessageContentView(message: CardMessage, alignment: MessageBubbleAlignment, theme: CometChatTheme): any;
    getTextMessageTemplate(theme: CometChatTheme, additionalConfigurations?: any): CometChatMessageTemplate;
    getImageMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getVideoMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getAudioMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getFileMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getGroupActionTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getFormMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getSchedulerMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getCardMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getAllMessageTemplates(theme?: CometChatTheme | undefined, additionalConfigurations?: any): CometChatMessageTemplate[];
    getMessageTemplate(messageType: string, messageCategory: string, theme?: CometChatTheme | undefined): CometChatMessageTemplate | null;
    getMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, theme: CometChatTheme, group?: CometChat.Group): Array<CometChatActionsIcon | CometChatActionsView>;
    getCommonOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, theme: CometChatTheme, group?: CometChat.Group): Array<CometChatActionsIcon | CometChatActionsView>;
    getAttachmentOptions(theme: CometChatTheme, id?: Map<String, any> | undefined): CometChatMessageComposerAction[];
    getAllMessageTypes(): string[];
    getAllMessageCategories(): string[];
    getAuxiliaryOptions(id: Map<String, any>, theme: CometChatTheme, user?: CometChat.User, group?: CometChat.Group): any;
    getId(): string;
    getDeleteMessageBubble(messageObject: CometChat.BaseMessage, theme: CometChatTheme, style?: TextBubbleStyle): any;
    getGroupActionBubble(message: CometChat.BaseMessage, theme: CometChatTheme, style?: TextBubbleStyle): any;
    getTextMessageBubble(messageText: string, message: CometChat.TextMessage, alignment: MessageBubbleAlignment, theme: CometChatTheme, style?: TextBubbleStyle, additionalConfigurations?: any): any;
    getVideoMessageBubble(videoUrl: string, message: CometChat.MediaMessage, theme: CometChatTheme, thumbnailUrl?: string, onClick?: Function, style?: BaseStyle): any;
    getImageMessageBubble(imageUrl: string, placeholderImage: string, message: CometChat.MediaMessage, theme: CometChatTheme, onClick?: Function, style?: ImageBubbleStyle): any;
    getAudioMessageBubble(audioUrl: string, message: CometChat.MediaMessage, theme: CometChatTheme, title?: string, style?: BaseStyle): any;
    getFileMessageBubble(fileUrl: string, message: CometChat.MediaMessage, theme: CometChatTheme, title?: string, style?: FileBubbleStyle): any;
    getFormMessageBubble(message: FormMessage, theme: CometChatTheme, style?: FormBubbleStyle, onSubmitClick?: Function): any;
    getSchedulerMessageBubble(message: SchedulerMessage, theme: CometChatTheme, style?: SchedulerBubbleStyle, onSubmitClick?: Function): any;
    getCardMessageBubble(message: CardMessage, theme: CometChatTheme, style?: CardBubbleStyle): any;
    getLastConversationMessage(conversation: CometChat.Conversation, loggedInUser: CometChat.User, additionalConfigurations?: any): string;
    getDefaultDetailsTemplate(loggedInUser: CometChat.User, user: CometChat.User | null, group: CometChat.Group | null, theme: CometChatTheme): CometChatDetailsTemplate[];
    getAuxiliaryHeaderMenu(user?: CometChat.User, group?: CometChat.Group): any;
    getAIOptions(user: CometChat.User | null, group: CometChat.Group | null, theme: CometChatTheme, id?: Map<String, any>, AIOptionsStyle?: AIOptionsStyle): (CometChatMessageComposerAction | CometChatActionsView)[];
    getAllTextFormatters(formatterParams: any): CometChatTextFormatter[];
    getMentionsTextFormatter(params?: any): CometChatMentionsTextFormatter;
    getUrlTextFormatter(params?: any): CometChatUrlTextFormatter;
    getMentionsFormattedText(message: CometChat.TextMessage, subtitle: string, additionalConfigurations: any): string;
}
