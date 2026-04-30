import { AnchorHTMLAttributes } from 'react';
import { AnimationEventHandler } from 'react';
import { AriaRole } from 'react';
import { BackgroundProps } from 'styled-system';
import { BorderProps } from 'styled-system';
import { ButtonHTMLAttributes } from 'react';
import { ChangeEventHandler } from 'react';
import { ClipboardEventHandler } from 'react';
import { ColorProps } from 'styled-system';
import { ComponentPropsWithRef } from 'react';
import { ComponentType } from 'react';
import { CompositionEventHandler } from 'react';
import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { DetailedHTMLProps } from 'react';
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES } from 'react';
import { DragEventHandler } from 'react';
import { ElementType } from 'react';
import { FlexboxProps } from 'styled-system';
import { FocusEventHandler } from 'react';
import { FormEventHandler } from 'react';
import { GridProps as GridProps_2 } from 'styled-system';
import { HTMLAttributes } from 'react';
import { HTMLInputAutoCompleteAttribute } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { InputEventHandler } from 'react';
import { InputHTMLAttributes } from 'react';
import { IStyledComponent } from 'styled-components';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { Key } from 'react';
import { KeyboardEventHandler } from 'react';
import { LayoutProps } from 'styled-system';
import { LegacyRef } from 'react';
import { MouseEvent as MouseEvent_2 } from 'react';
import { MouseEventHandler } from 'react';
import { PointerEventHandler } from 'react';
import { PositionProps } from 'styled-system';
import { PropsWithChildren } from 'react';
import { ReactElement } from 'react';
import { ReactEventHandler } from 'react';
import { ReactNode } from 'react';
import { RefObject } from 'react';
import { ResponsiveValue } from 'styled-system';
import { SpaceProps } from 'styled-system';
import { Substitute } from 'styled-components/dist/types';
import { SVGProps } from 'react';
import { TouchEventHandler } from 'react';
import { TransitionEventHandler } from 'react';
import { TypographyProps } from 'styled-system';
import { UIEventHandler } from 'react';
import { WheelEventHandler } from 'react';

export declare function AccountFilledIcon(p: IconProps): JSX_2.Element;

export declare function AccountIcon(p: IconProps): JSX_2.Element;

export declare function ActivityIcon(p: IconProps): JSX_2.Element;

export declare function AddCircleIcon(p: IconProps): JSX_2.Element;

export declare function AddIcon(p: IconProps): JSX_2.Element;

export declare const Alert: default_2.FC<default_2.PropsWithChildren<AlertProps>>;

declare interface AlertProps {
    variant?: Variants;
    title: string | ReactNode;
    children?: ReactNode;
    onClick?: (evt: MouseEvent_2<HTMLButtonElement>) => void;
}

export declare const AlertTriangleIcon: typeof WarningIcon;

export declare const alertVariants: {
    readonly INFO: "info";
    readonly DANGER: "danger";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
};

export declare function AllBlogIcon(p: IconProps): JSX_2.Element;

export declare function AlpIcon(p: IconProps): JSX_2.Element;

export declare function AptosIcon(p: IconProps): JSX_2.Element;

export declare function ArbitrumIcon(p: IconProps): JSX_2.Element;

export declare function ArrowBackIcon(p: IconProps): JSX_2.Element;

export declare function ArrowDownIcon(p: IconProps): JSX_2.Element;

export declare function ArrowDropDownIcon(p: IconProps): JSX_2.Element;

export declare function ArrowDropUpIcon(p: IconProps): JSX_2.Element;

export declare function ArrowFirstIcon(p: IconProps): JSX_2.Element;

export declare function ArrowForwardIcon(p: IconProps): JSX_2.Element;

export declare function ArrowLastIcon(p: IconProps): JSX_2.Element;

export declare const ArrowRightIcon: typeof ArrowForwardIcon;

export declare function ArrowUpDownIcon(p: IconProps): JSX_2.Element;

export declare function ArrowUpIcon(p: IconProps): JSX_2.Element;

export declare function AutoRenewIcon(p: IconProps): JSX_2.Element;

export declare function BackForwardIcon(p: IconProps): JSX_2.Element;

export declare const BarChart2Icon: typeof BarChartIcon;

export declare function BarChartIcon(p: IconProps): JSX_2.Element;

export declare interface BaseButtonProps extends LayoutProps, SpaceProps, BorderProps {
    as?: "a" | "button" | ElementType;
    external?: boolean;
    isLoading?: boolean;
    scale?: ResponsiveValue<Scale>;
    variant?: Variant;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    decorator?: {
        backgroundColor?: string;
        color?: string;
        text: string;
        direction?: "left" | "right";
    };
}

export declare function BaseIcon(p: IconProps): JSX_2.Element;

declare interface BasicDataType {
    [key: string]: any;
}

export declare function BellIcon(p: IconProps): JSX_2.Element;

export declare function BidAskGraphIcon(p: IconProps): JSX_2.Element;

export declare function BinanceChainIcon(p: IconProps): JSX_2.Element;

export declare function BinanceIcon(p: IconProps): JSX_2.Element;

export declare function BirthdayIcon(p: IconProps): JSX_2.Element;

export declare function BlockIcon(p: IconProps): JSX_2.Element;

export declare function BloctoIcon(p: IconProps): JSX_2.Element;

export declare function BnbUsdtPairTokenIcon(p: IconProps): JSX_2.Element;

export declare const BottomDrawer: default_2.FC<default_2.PropsWithChildren<BottomDrawerProps>>;

declare interface BottomDrawerProps {
    content: default_2.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void | null;
    drawerContainerStyle?: default_2.CSSProperties;
    hideCloseButton?: boolean;
}

export declare const Box: IStyledComponent<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BoxProps_2>>;

declare type BoxProps = React.HTMLAttributes<HTMLDivElement>;

declare interface BoxProps_2 extends BackgroundProps, BorderProps, LayoutProps, PositionProps, SpaceProps, Omit<ColorProps, "color">, HTMLAttributes<HTMLElement> {
}

export declare function BraveIcon(p: IconProps): JSX_2.Element;

declare type BreakpointChecks = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
} & State;

export declare function BridgeIcon(p: IconProps): JSX_2.Element;

export declare function BscScanIcon(p: IconProps): JSX_2.Element;

export declare function BscTraceIcon(p: IconProps): JSX_2.Element;

export declare function BulbIcon(p: IconProps): JSX_2.Element;

export declare function BunnyCardsIcon(p: IconProps): JSX_2.Element;

export declare function BunnyFillIcon(p: IconProps): JSX_2.Element;

export declare const Button: <E extends ElementType = "button">(props: ButtonProps<E>) => JSX.Element;

export declare const ButtonMenu: default_2.FC<default_2.PropsWithChildren<ButtonMenuProps>>;

export declare const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button">;

export declare interface ButtonMenuItemProps extends BaseButtonProps {
    isActive?: boolean;
}

export declare interface ButtonMenuProps extends SpaceProps {
    variant?: typeof variants.PRIMARY | typeof variants.SUBTLE | typeof variants.LIGHT | typeof variants.TEXT;
    activeIndex?: number;
    onItemClick?: (index: number, event: React.MouseEvent<HTMLElement>) => void;
    scale?: Scale;
    disabled?: boolean;
    children: ReactElement[];
    fullWidth?: boolean;
    style?: React.CSSProperties;
    noButtonMargin?: boolean;
}

export declare type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;

export declare function CalculateIcon(p: IconProps): JSX_2.Element;

export declare function CalenderIcon(p: IconProps): JSX_2.Element;

export declare function CameraIcon(p: IconProps): JSX_2.Element;

export declare function CandleGraphIcon(p: IconProps): JSX_2.Element;

export declare const CandlestickIcon: typeof CandleGraphIcon;

export declare const Card: default_2.FC<default_2.PropsWithChildren<CardProps>>;

export declare const CardBody: IStyledComponent<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CardBodyProps>>;

declare type CardBodyProps = SpaceProps;

export declare const CardFooter: IStyledComponent<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CardFooterProps>>;

declare type CardFooterProps = SpaceProps;

export declare const CardHeader: IStyledComponent<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CardHeaderProps>>;

declare interface CardHeaderProps extends SpaceProps {
    variant?: keyof CardTheme["cardHeaderBackground"];
}

export declare interface CardProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    isDisabled?: boolean;
    ribbon?: React.ReactNode;
    borderBackground?: string;
    background?: string;
    innerCardProps?: BoxProps;
}

export declare const CardRibbon: default_2.FC<default_2.PropsWithChildren<CardRibbonProps>>;

export declare interface CardRibbonProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
    variantColor?: keyof Colors;
    text: string;
    ribbonPosition?: "right" | "left";
}

export declare function CardsIcon(p: IconProps): JSX_2.Element;

declare type CardTheme = {
    background: string;
    boxShadow: string;
    boxShadowActive: string;
    boxShadowSuccess: string;
    boxShadowWarning: string;
    cardHeaderBackground: {
        default: string;
        blue: string;
        bubblegum: string;
        violet: string;
        pale: string;
    };
    dropShadow: string;
};

export declare function CardViewIcon(p: IconProps): JSX_2.Element;

export declare function ChartDisableIcon(p: IconProps): JSX_2.Element;

export declare function ChartIcon(p: IconProps): JSX_2.Element;

export declare const Checkbox: IStyledComponent<"web", Substitute<    {
size?: number | undefined | undefined;
children?: ReactNode;
"aria-label"?: string | undefined | undefined;
suppressHydrationWarning?: boolean | undefined | undefined;
className?: string | undefined | undefined;
color?: string | undefined | undefined;
height?: number | string | undefined | undefined;
id?: string | undefined | undefined;
lang?: string | undefined | undefined;
max?: number | string | undefined | undefined;
min?: number | string | undefined | undefined;
name?: string | undefined | undefined;
style?: CSSProperties | undefined;
type?: HTMLInputTypeAttribute | undefined;
width?: number | string | undefined | undefined;
role?: AriaRole | undefined;
tabIndex?: number | undefined | undefined;
"aria-activedescendant"?: string | undefined | undefined;
"aria-atomic"?: (boolean | "true" | "false") | undefined;
"aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined | undefined;
"aria-braillelabel"?: string | undefined | undefined;
"aria-brailleroledescription"?: string | undefined | undefined;
"aria-busy"?: (boolean | "true" | "false") | undefined;
"aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-colcount"?: number | undefined | undefined;
"aria-colindex"?: number | undefined | undefined;
"aria-colindextext"?: string | undefined | undefined;
"aria-colspan"?: number | undefined | undefined;
"aria-controls"?: string | undefined | undefined;
"aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined | undefined;
"aria-describedby"?: string | undefined | undefined;
"aria-description"?: string | undefined | undefined;
"aria-details"?: string | undefined | undefined;
"aria-disabled"?: (boolean | "true" | "false") | undefined;
"aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined | undefined;
"aria-errormessage"?: string | undefined | undefined;
"aria-expanded"?: (boolean | "true" | "false") | undefined;
"aria-flowto"?: string | undefined | undefined;
"aria-grabbed"?: (boolean | "true" | "false") | undefined;
"aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined | undefined;
"aria-hidden"?: (boolean | "true" | "false") | undefined;
"aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined | undefined;
"aria-keyshortcuts"?: string | undefined | undefined;
"aria-labelledby"?: string | undefined | undefined;
"aria-level"?: number | undefined | undefined;
"aria-live"?: "off" | "assertive" | "polite" | undefined | undefined;
"aria-modal"?: (boolean | "true" | "false") | undefined;
"aria-multiline"?: (boolean | "true" | "false") | undefined;
"aria-multiselectable"?: (boolean | "true" | "false") | undefined;
"aria-orientation"?: "horizontal" | "vertical" | undefined | undefined;
"aria-owns"?: string | undefined | undefined;
"aria-placeholder"?: string | undefined | undefined;
"aria-posinset"?: number | undefined | undefined;
"aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-readonly"?: (boolean | "true" | "false") | undefined;
"aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined | undefined;
"aria-required"?: (boolean | "true" | "false") | undefined;
"aria-roledescription"?: string | undefined | undefined;
"aria-rowcount"?: number | undefined | undefined;
"aria-rowindex"?: number | undefined | undefined;
"aria-rowindextext"?: string | undefined | undefined;
"aria-rowspan"?: number | undefined | undefined;
"aria-selected"?: (boolean | "true" | "false") | undefined;
"aria-setsize"?: number | undefined | undefined;
"aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined | undefined;
"aria-valuemax"?: number | undefined | undefined;
"aria-valuemin"?: number | undefined | undefined;
"aria-valuenow"?: number | undefined | undefined;
"aria-valuetext"?: string | undefined | undefined;
dangerouslySetInnerHTML?: {
__html: string | TrustedHTML;
} | undefined | undefined;
onCopy?: ClipboardEventHandler<HTMLInputElement> | undefined;
onCopyCapture?: ClipboardEventHandler<HTMLInputElement> | undefined;
onCut?: ClipboardEventHandler<HTMLInputElement> | undefined;
onCutCapture?: ClipboardEventHandler<HTMLInputElement> | undefined;
onPaste?: ClipboardEventHandler<HTMLInputElement> | undefined;
onPasteCapture?: ClipboardEventHandler<HTMLInputElement> | undefined;
onCompositionEnd?: CompositionEventHandler<HTMLInputElement> | undefined;
onCompositionEndCapture?: CompositionEventHandler<HTMLInputElement> | undefined;
onCompositionStart?: CompositionEventHandler<HTMLInputElement> | undefined;
onCompositionStartCapture?: CompositionEventHandler<HTMLInputElement> | undefined;
onCompositionUpdate?: CompositionEventHandler<HTMLInputElement> | undefined;
onCompositionUpdateCapture?: CompositionEventHandler<HTMLInputElement> | undefined;
onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
onFocusCapture?: FocusEventHandler<HTMLInputElement> | undefined;
onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
onBlurCapture?: FocusEventHandler<HTMLInputElement> | undefined;
onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
onChangeCapture?: FormEventHandler<HTMLInputElement> | undefined;
onBeforeInput?: InputEventHandler<HTMLInputElement> | undefined;
onBeforeInputCapture?: FormEventHandler<HTMLInputElement> | undefined;
onInput?: FormEventHandler<HTMLInputElement> | undefined;
onInputCapture?: FormEventHandler<HTMLInputElement> | undefined;
onReset?: FormEventHandler<HTMLInputElement> | undefined;
onResetCapture?: FormEventHandler<HTMLInputElement> | undefined;
onSubmit?: FormEventHandler<HTMLInputElement> | undefined;
onSubmitCapture?: FormEventHandler<HTMLInputElement> | undefined;
onInvalid?: FormEventHandler<HTMLInputElement> | undefined;
onInvalidCapture?: FormEventHandler<HTMLInputElement> | undefined;
onLoad?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onError?: ReactEventHandler<HTMLInputElement> | undefined;
onErrorCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
onKeyDownCapture?: KeyboardEventHandler<HTMLInputElement> | undefined;
onKeyPress?: KeyboardEventHandler<HTMLInputElement> | undefined;
onKeyPressCapture?: KeyboardEventHandler<HTMLInputElement> | undefined;
onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined;
onKeyUpCapture?: KeyboardEventHandler<HTMLInputElement> | undefined;
onAbort?: ReactEventHandler<HTMLInputElement> | undefined;
onAbortCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onCanPlay?: ReactEventHandler<HTMLInputElement> | undefined;
onCanPlayCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onCanPlayThrough?: ReactEventHandler<HTMLInputElement> | undefined;
onCanPlayThroughCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onDurationChange?: ReactEventHandler<HTMLInputElement> | undefined;
onDurationChangeCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onEmptied?: ReactEventHandler<HTMLInputElement> | undefined;
onEmptiedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onEncrypted?: ReactEventHandler<HTMLInputElement> | undefined;
onEncryptedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onEnded?: ReactEventHandler<HTMLInputElement> | undefined;
onEndedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadedData?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadedDataCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadedMetadata?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadedMetadataCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadStart?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadStartCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onPause?: ReactEventHandler<HTMLInputElement> | undefined;
onPauseCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onPlay?: ReactEventHandler<HTMLInputElement> | undefined;
onPlayCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onPlaying?: ReactEventHandler<HTMLInputElement> | undefined;
onPlayingCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onProgress?: ReactEventHandler<HTMLInputElement> | undefined;
onProgressCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onRateChange?: ReactEventHandler<HTMLInputElement> | undefined;
onRateChangeCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onSeeked?: ReactEventHandler<HTMLInputElement> | undefined;
onSeekedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onSeeking?: ReactEventHandler<HTMLInputElement> | undefined;
onSeekingCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onStalled?: ReactEventHandler<HTMLInputElement> | undefined;
onStalledCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onSuspend?: ReactEventHandler<HTMLInputElement> | undefined;
onSuspendCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onTimeUpdate?: ReactEventHandler<HTMLInputElement> | undefined;
onTimeUpdateCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onVolumeChange?: ReactEventHandler<HTMLInputElement> | undefined;
onVolumeChangeCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onWaiting?: ReactEventHandler<HTMLInputElement> | undefined;
onWaitingCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onAuxClick?: MouseEventHandler<HTMLInputElement> | undefined;
onAuxClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onClick?: MouseEventHandler<HTMLInputElement> | undefined;
onClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onContextMenu?: MouseEventHandler<HTMLInputElement> | undefined;
onContextMenuCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onDoubleClick?: MouseEventHandler<HTMLInputElement> | undefined;
onDoubleClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onDrag?: DragEventHandler<HTMLInputElement> | undefined;
onDragCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragEnd?: DragEventHandler<HTMLInputElement> | undefined;
onDragEndCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragEnter?: DragEventHandler<HTMLInputElement> | undefined;
onDragEnterCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragExit?: DragEventHandler<HTMLInputElement> | undefined;
onDragExitCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragLeave?: DragEventHandler<HTMLInputElement> | undefined;
onDragLeaveCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragOver?: DragEventHandler<HTMLInputElement> | undefined;
onDragOverCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragStart?: DragEventHandler<HTMLInputElement> | undefined;
onDragStartCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDrop?: DragEventHandler<HTMLInputElement> | undefined;
onDropCapture?: DragEventHandler<HTMLInputElement> | undefined;
onMouseDown?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseDownCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseEnter?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseLeave?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseMove?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseMoveCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseOut?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseOutCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseOver?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseOverCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseUp?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseUpCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onSelect?: ReactEventHandler<HTMLInputElement> | undefined;
onSelectCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onTouchCancel?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchCancelCapture?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchEnd?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchEndCapture?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchMove?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchMoveCapture?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchStart?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchStartCapture?: TouchEventHandler<HTMLInputElement> | undefined;
onPointerDown?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerDownCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerMove?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerMoveCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerUp?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerUpCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerCancel?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerCancelCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerEnter?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerLeave?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerOver?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerOverCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerOut?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerOutCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onGotPointerCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onGotPointerCaptureCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onLostPointerCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onLostPointerCaptureCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onScroll?: UIEventHandler<HTMLInputElement> | undefined;
onScrollCapture?: UIEventHandler<HTMLInputElement> | undefined;
onWheel?: WheelEventHandler<HTMLInputElement> | undefined;
onWheelCapture?: WheelEventHandler<HTMLInputElement> | undefined;
onAnimationStart?: AnimationEventHandler<HTMLInputElement> | undefined;
onAnimationStartCapture?: AnimationEventHandler<HTMLInputElement> | undefined;
onAnimationEnd?: AnimationEventHandler<HTMLInputElement> | undefined;
onAnimationEndCapture?: AnimationEventHandler<HTMLInputElement> | undefined;
onAnimationIteration?: AnimationEventHandler<HTMLInputElement> | undefined;
onAnimationIterationCapture?: AnimationEventHandler<HTMLInputElement> | undefined;
onTransitionEnd?: TransitionEventHandler<HTMLInputElement> | undefined;
onTransitionEndCapture?: TransitionEventHandler<HTMLInputElement> | undefined;
key?: Key | null | undefined;
form?: string | undefined | undefined;
list?: string | undefined | undefined;
slot?: string | undefined | undefined;
title?: string | undefined | undefined;
pattern?: string | undefined | undefined;
defaultChecked?: boolean | undefined | undefined;
defaultValue?: string | number | readonly string[] | undefined;
suppressContentEditableWarning?: boolean | undefined | undefined;
accessKey?: string | undefined | undefined;
autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {}) | undefined;
autoFocus?: boolean | undefined | undefined;
contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
contextMenu?: string | undefined | undefined;
dir?: string | undefined | undefined;
draggable?: (boolean | "true" | "false") | undefined;
enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined | undefined;
hidden?: boolean | undefined | undefined;
nonce?: string | undefined | undefined;
spellCheck?: (boolean | "true" | "false") | undefined;
translate?: "yes" | "no" | undefined | undefined;
radioGroup?: string | undefined | undefined;
about?: string | undefined | undefined;
content?: string | undefined | undefined;
datatype?: string | undefined | undefined;
inlist?: any;
prefix?: string | undefined | undefined;
property?: string | undefined | undefined;
rel?: string | undefined | undefined;
resource?: string | undefined | undefined;
rev?: string | undefined | undefined;
typeof?: string | undefined | undefined;
vocab?: string | undefined | undefined;
autoCorrect?: string | undefined | undefined;
autoSave?: string | undefined | undefined;
itemProp?: string | undefined | undefined;
itemScope?: boolean | undefined | undefined;
itemType?: string | undefined | undefined;
itemID?: string | undefined | undefined;
itemRef?: string | undefined | undefined;
results?: number | undefined | undefined;
security?: string | undefined | undefined;
unselectable?: "on" | "off" | undefined | undefined;
inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined | undefined;
is?: string | undefined | undefined;
exportparts?: string | undefined | undefined;
part?: string | undefined | undefined;
'data-pr-tooltip'?: string | undefined | undefined;
'data-pr-disabled'?: boolean | undefined | undefined;
'data-pr-classname'?: string | undefined | undefined;
'data-pr-position'?: "top" | "bottom" | "left" | "right" | "mouse" | undefined | undefined;
'data-pr-my'?: string | undefined | undefined;
'data-pr-at'?: string | undefined | undefined;
'data-pr-event'?: "hover" | "focus" | "both" | undefined | undefined;
'data-pr-showevent'?: string | undefined | undefined;
'data-pr-hideevent'?: string | undefined | undefined;
'data-pr-mousetrack'?: boolean | undefined | undefined;
'data-pr-mousetracktop'?: number | undefined | undefined;
'data-pr-mousetrackleft'?: number | undefined | undefined;
'data-pr-showdelay'?: number | undefined | undefined;
'data-pr-updatedelay'?: number | undefined | undefined;
'data-pr-hidedelay'?: number | undefined | undefined;
'data-pr-autohide'?: boolean | undefined | undefined;
'data-pr-showondisabled'?: boolean | undefined | undefined;
disabled?: boolean | undefined | undefined;
formAction?: string | undefined;
formEncType?: string | undefined | undefined;
formMethod?: string | undefined | undefined;
formNoValidate?: boolean | undefined | undefined;
formTarget?: string | undefined | undefined;
value?: string | number | readonly string[] | undefined;
autoComplete?: HTMLInputAutoCompleteAttribute | undefined;
alt?: string | undefined | undefined;
src?: string | undefined | undefined;
accept?: string | undefined | undefined;
capture?: boolean | "user" | "environment" | undefined | undefined;
checked?: boolean | undefined | undefined;
maxLength?: number | undefined | undefined;
minLength?: number | undefined | undefined;
multiple?: boolean | undefined | undefined;
placeholder?: string | undefined | undefined;
readOnly?: boolean | undefined | undefined;
required?: boolean | undefined | undefined;
step?: number | string | undefined | undefined;
ref?: ((instance: HTMLInputElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLInputElement> | null | undefined;
}, CheckboxProps>>;

export declare interface CheckboxProps {
    scale?: CheckboxScales | string;
    colors?: {
        background?: keyof PcsTheme["colors"];
        checkedBackground?: keyof PcsTheme["colors"];
        checkedColor?: keyof PcsTheme["colors"];
        border?: keyof PcsTheme["colors"];
    };
    indeterminate?: boolean;
}

export declare type CheckboxScales = (typeof scales_2)[keyof typeof scales_2];

export declare const CheckCircleIcon: typeof CheckmarkCircleIcon;

export declare const CheckIcon: typeof CheckmarkIcon;

export declare function CheckmarkCircleFillIcon(p: IconProps): JSX_2.Element;

export declare function CheckmarkCircleIcon(p: IconProps): JSX_2.Element;

export declare function CheckmarkIcon(p: IconProps): JSX_2.Element;

export declare function ChevronDownIcon(p: IconProps): JSX_2.Element;

export declare function ChevronLeftIcon(p: IconProps): JSX_2.Element;

export declare function ChevronRightIcon(p: IconProps): JSX_2.Element;

export declare function ChevronsCollapseIcon(p: IconProps): JSX_2.Element;

export declare function ChevronsExpandIcon(p: IconProps): JSX_2.Element;

export declare function ChevronUpIcon(p: IconProps): JSX_2.Element;

export declare function CircleOutlineIcon(p: IconProps): JSX_2.Element;

export declare function CloseCircleIcon(p: IconProps): JSX_2.Element;

export declare function CloseIcon(p: IconProps): JSX_2.Element;

export declare function CogIcon(p: IconProps): JSX_2.Element;

export declare function Coin98Icon(p: IconProps): JSX_2.Element;

export declare function CoinbaseWalletIcon(p: IconProps): JSX_2.Element;

export declare function CoinsIcon(p: IconProps): JSX_2.Element;

export declare const Collapse: React.FC<CollapseProps>;

declare interface CollapseProps extends Omit<BoxProps, "title" | "content"> {
    title?: React.ReactNode;
    content?: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    recalculateDep?: boolean;
    titleBoxProps?: BoxProps;
    contentBoxProps?: BoxProps;
    contentExtendableMaxHeight?: number;
}

declare type Colors = Record<string, string>;

export declare function CommunityFilledIcon(p: IconProps): JSX_2.Element;

export declare function CommunityIcon(p: IconProps): JSX_2.Element;

export declare function CopyIcon(p: IconProps): JSX_2.Element;

export declare function CrossIcon(p: IconProps): JSX_2.Element;

export declare function CrownIcon(p: IconProps): JSX_2.Element;

export declare function CurrencyIcon(p: IconProps): JSX_2.Element;

export declare function CurvedChartIcon(p: IconProps): JSX_2.Element;

export declare function CurveGraphIcon(p: IconProps): JSX_2.Element;

export declare function DefaultTokenIcon(p: IconProps): JSX_2.Element;

export declare function DeleteOutlineIcon(p: IconProps): JSX_2.Element;

export declare function DepositIcon(p: IconProps): JSX_2.Element;

export declare function DiscordIcon(p: IconProps): JSX_2.Element;

export declare function DonateIcon(p: IconProps): JSX_2.Element;

export declare function DotIcon(p: IconProps): JSX_2.Element;

export declare function DragIcon(p: IconProps): JSX_2.Element;

export declare function EarnFilledIcon(p: IconProps): JSX_2.Element;

export declare function EarnFillIcon(p: IconProps): JSX_2.Element;

export declare function EarnIcon(p: IconProps): JSX_2.Element;

export declare const EditIcon: typeof PencilIcon;

export declare function EllipsisIcon(p: IconProps): JSX_2.Element;

export declare function EmptyIcon(p: IconProps): JSX_2.Element;

export declare function EmptyRewardIcon(p: IconProps): JSX_2.Element;

export declare function ErrorFillIcon(p: IconProps): JSX_2.Element;

export declare function ErrorIcon(p: IconProps): JSX_2.Element;

export declare function EthChainIcon(p: IconProps): JSX_2.Element;

export declare function ExpandIcon(p: IconProps): JSX_2.Element;

export declare const ExternalLinkIcon: typeof OpenNewIcon;

export declare function FarmIcon(p: IconProps): JSX_2.Element;

export declare function FavoriteBorderIcon(p: IconProps): JSX_2.Element;

export declare function FilterIcon(p: IconProps): JSX_2.Element;

export declare const Flex: IStyledComponent<"web", Substitute<Omit<{
ref?: LegacyRef<HTMLDivElement> | undefined;
key?: Key | null | undefined;
} & BoxProps_2, "ref"> & {
ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined;
}, FlexProps>>;

declare interface FlexProps extends BoxProps_2, FlexboxProps {
}

export declare function GameIcon(p: IconProps): JSX_2.Element;

export declare function GithubIcon(p: IconProps): JSX_2.Element;

export declare function GlassGlobeIcon(p: IconProps): JSX_2.Element;

export declare const GlobeIcon: typeof LanguageIcon;

export declare function GovernanceIcon(p: IconProps): JSX_2.Element;

export declare const Grid: ComponentType<GridProps>;

export declare const GridIcon: typeof MoreVerticalIcon;

declare interface GridProps extends FlexProps, GridProps_2 {
}

export declare function GroupsIcon(p: IconProps): JSX_2.Element;

export declare function HamburgerCloseIcon(p: IconProps): JSX_2.Element;

export declare function HamburgerIcon(p: IconProps): JSX_2.Element;

declare type Handler = () => void;

export declare const Heading: ComponentType<HeadingProps & TextProps>;

export declare interface HeadingProps {
    as?: HeadingTags;
    scale?: HeadingScales;
}

export declare type HeadingScales = (typeof scales_7)[keyof typeof scales_7];

export declare type HeadingTags = (typeof tags)[keyof typeof tags];

export declare function HelpFilledIcon(p: IconProps): JSX_2.Element;

export declare function HelpIcon(p: IconProps): JSX_2.Element;

export declare function HistoryIcon(p: IconProps): JSX_2.Element;

export declare function HomeIcon(p: IconProps): JSX_2.Element;

export declare function HookFeatureIcon(p: IconProps): JSX_2.Element;

export declare function HooksIcon(p: IconProps): JSX_2.Element;

export declare function HotDisableIcon(p: IconProps): JSX_2.Element;

export declare function HotIcon(p: IconProps): JSX_2.Element;

export declare interface IColumnsType<T extends BasicDataType> {
    title: React.ReactNode | (() => React.ReactNode);
    dataIndex: keyof T | null;
    key: React.Key;
    render?: (value: any, record: T, index: number) => React.ReactNode;
    sorter?: boolean;
    minWidth?: string;
    width?: string;
    display?: boolean;
    clickable?: boolean;
    align?: 'left' | 'center' | 'right';
}

export declare const IconButton: PolymorphicComponent<BaseButtonProps, "button">;

declare type IconProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export declare function IfoIcon(p: IconProps): JSX_2.Element;

export declare function InfoFilledIcon(p: IconProps): JSX_2.Element;

export declare function InfoIcon(p: IconProps): JSX_2.Element;

export declare interface InjectedModalProps {
    onDismiss?: Handler;
    mode?: string;
}

export declare const Input: IStyledComponent<"web", Substitute<Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
ref?: ((instance: HTMLInputElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLInputElement> | null | undefined;
}, InputProps>>;

export declare const InputGroup: ({ scale, startIcon, endIcon, children, ...props }: InputGroupProps) => JSX.Element;

export declare interface InputGroupProps extends SpaceProps {
    scale?: InputScales;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    children: JSX.Element;
}

export declare interface InputProps extends SpaceProps {
    scale?: InputScales;
    isSuccess?: boolean;
    isWarning?: boolean;
    isError?: boolean;
}

export declare type InputScales = (typeof scales_4)[keyof typeof scales_4];

export declare function InsertChartOutlinedIcon(p: IconProps): JSX_2.Element;

export declare function InstagramIcon(p: IconProps): JSX_2.Element;

declare type ISortOrder = SORT_ORDER.NULL | SORT_ORDER.ASC | SORT_ORDER.DESC;

export declare interface ITableViewProps<T extends BasicDataType> {
    getRowKey?: (item: T) => string;
    rowKey?: string;
    columns: IColumnsType<T>[];
    data: T[];
    rowStyle?: React.CSSProperties;
    onSort?: (parms: {
        dataIndex: IColumnsType<T>["dataIndex"];
        order: ISortOrder;
    }) => void;
    sortOrder?: ISortOrder;
    sortField?: IColumnsType<T>["dataIndex"];
    onRowClick?: (record: T, e: React.MouseEvent) => void;
}

export declare function LanguageCurrencyIcon(p: IconProps): JSX_2.Element;

export declare function LanguageIcon(p: IconProps): JSX_2.Element;

export declare function LaurelLeftIcon(p: IconProps): JSX_2.Element;

export declare function LaurelRightIcon(p: IconProps): JSX_2.Element;

export declare function LayersIcon(p: IconProps): JSX_2.Element;

export declare function LibraryIcon(p: IconProps): JSX_2.Element;

export declare function LightBulbIcon(p: IconProps): JSX_2.Element;

export declare function LineaIcon(p: IconProps): JSX_2.Element;

export declare function LineGraphIcon(p: IconProps): JSX_2.Element;

export declare const Link: default_2.FC<default_2.PropsWithChildren<LinkProps>>;

export declare const LinkExternal: default_2.FC<default_2.PropsWithChildren<LinkProps>>;

export declare function LinkIcon(p: IconProps): JSX_2.Element;

export declare function LinkPlusIcon(p: IconProps): JSX_2.Element;

export declare interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
    showExternalIcon?: boolean;
}

export declare function LinkSlashedIcon(p: IconProps): JSX_2.Element;

export declare function ListViewIcon(p: IconProps): JSX_2.Element;

export declare function LocationIcon(p: IconProps): JSX_2.Element;

export declare function LockIcon(p: IconProps): JSX_2.Element;

export declare function LoginIcon(p: IconProps): JSX_2.Element;

export declare function LogoIcon(p: IconProps): JSX_2.Element;

export declare function LogoRoundIcon(p: IconProps): JSX_2.Element;

export declare const LogOutIcon: typeof LogoutIcon;

export declare function LogoutIcon(p: IconProps): JSX_2.Element;

export declare function LogoWithTextIcon(p: IconProps): JSX_2.Element;

export declare const MatchBreakpointsProvider: default_2.FC<default_2.PropsWithChildren>;

export declare function MathWalletIcon(p: IconProps): JSX_2.Element;

export declare function MedalBronzeIcon(p: IconProps): JSX_2.Element;

export declare function MedalGoldIcon(p: IconProps): JSX_2.Element;

export declare function MedalPurpleIcon(p: IconProps): JSX_2.Element;

export declare function MedalSilverIcon(p: IconProps): JSX_2.Element;

export declare function MedalTealIcon(p: IconProps): JSX_2.Element;

export declare function MediumIcon(p: IconProps): JSX_2.Element;

export declare const MenuIcon: typeof HamburgerIcon;

export declare const Message: default_2.FC<default_2.PropsWithChildren<MessageProps>>;

export declare interface MessageProps extends SpaceProps {
    variant: Variant_2;
    icon?: default_2.ReactNode;
    action?: default_2.ReactNode;
    actionInline?: boolean;
    style?: default_2.CSSProperties;
    showIcon?: boolean;
}

export declare const MessageText: default_2.FC<default_2.PropsWithChildren<TextProps>>;

export declare function MetamaskIcon(p: IconProps): JSX_2.Element;

export declare function MinusIcon(p: IconProps): JSX_2.Element;

export declare function MiscellaneousIcon(p: IconProps): JSX_2.Element;

export declare const Modal: default_2.FC<default_2.PropsWithChildren<ModalProps>>;

export declare interface ModalProps extends ModalWrapperProps {
    title: React.ReactNode;
    hideCloseButton?: boolean;
    onBack?: () => void;
    headerPadding?: string;
    bodyPadding?: string;
    headerBackground?: string;
    headerRightSlot?: React.ReactNode;
    bodyAlignItems?: string;
    headerBorderColor?: string;
    bodyTop?: string;
    headerProps?: TextProps;
}

export declare const ModalProvider: default_2.FC<default_2.PropsWithChildren<{
    portalProvider?: default_2.FC<default_2.PropsWithChildren>;
}>>;

export declare function ModalV2({ isOpen, onDismiss, closeOnOverlayClick, children, disableOutsidePointerEvents, ...props }: ModalV2Props & BoxProps_2 & {
    disableOutsidePointerEvents?: boolean;
}): default_2.ReactPortal | null;

declare interface ModalV2Props {
    isOpen?: boolean;
    onDismiss?: () => void;
    closeOnOverlayClick?: boolean;
    children?: default_2.ReactNode;
}

declare interface ModalWrapperProps extends InjectedModalProps, Omit<BoxProps_2, "title" | "content"> {
    containerStyle?: React.CSSProperties;
    hideCloseButton?: boolean;
}

export declare function MoonIcon(p: IconProps): JSX_2.Element;

export declare function MoreHorizontalIcon(p: IconProps): JSX_2.Element;

export declare function MoreIcon(p: IconProps): JSX_2.Element;

export declare function MoreVerticalIcon(p: IconProps): JSX_2.Element;

export declare const MotionModal: default_2.FC<default_2.PropsWithChildren<ModalProps>>;

export declare function NftFilledIcon(p: IconProps): JSX_2.Element;

export declare function NftFillIcon(p: IconProps): JSX_2.Element;

export declare function NftIcon(p: IconProps): JSX_2.Element;

export declare function NotificationBellIcon(p: IconProps): JSX_2.Element;

export declare function OkxWalletIcon(p: IconProps): JSX_2.Element;

export declare function OpenNewIcon(p: IconProps): JSX_2.Element;

export declare function OperaIcon(p: IconProps): JSX_2.Element;

export declare function PancakeProtectorIcon(p: IconProps): JSX_2.Element;

export declare function PancakeRoundIcon(p: IconProps): JSX_2.Element;

export declare function PancakesIcon(p: IconProps): JSX_2.Element;

export declare function PauseCircleIcon(p: IconProps): JSX_2.Element;

export declare type PcsTheme = typeof pcsTheme;

/**
 * Styled-components theme object — provides the same shape PCS UIKit
 * components expect (theme.colors.*, theme.radii.*, theme.shadows.*, etc.)
 *
 * Values are CSS variable references so they auto-switch with light/dark.
 */
export declare const pcsTheme: {
    colors: {
        primary: string;
        primaryBright: string;
        primaryDark: string;
        secondary: string;
        tertiary: string;
        success: string;
        failure: string;
        warning: string;
        binance: string;
        background: string;
        backgroundAlt: string;
        backgroundDisabled: string;
        backgroundHover: string;
        backgroundTapped: string;
        backgroundOverlay: string;
        card: string;
        cardBorder: string;
        cardSecondary: string;
        input: string;
        inputSecondary: string;
        text: string;
        textSubtle: string;
        textDisabled: string;
        contrast: string;
        invertedContrast: string;
        disabled: string;
        primary10: string;
        primary20: string;
        primary60: string;
        gradientBubblegum: string;
        white: string;
        transparent: string;
    };
    radii: {
        small: string;
        default: string;
        card: string;
        circle: string;
    };
    shadows: {
        level1: string;
        active: string;
        success: string;
        warning: string;
        danger: string;
        focus: string;
        inset: string;
        tooltip: string;
    };
    toggle: {
        handleBackground: string;
    };
    radio: {
        handleBackground: string;
    };
    card: {
        background: string;
        boxShadow: string;
        boxShadowActive: string;
        boxShadowSuccess: string;
        boxShadowWarning: string;
        cardHeaderBackground: {
            default: string;
            blue: string;
            bubblegum: string;
            violet: string;
            pale: string;
        };
        dropShadow: string;
    };
    alert: {
        background: string;
    };
    tooltip: {
        background: string;
        text: string;
        boxShadow: string;
    };
    breakpoints: string[];
    zIndices: {
        dropdown: number;
        ribbon: number;
        modal: number;
    };
    modal: {
        background: string;
    };
    isDark: boolean;
    mediaQueries: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
};

export declare function PencilIcon(p: IconProps): JSX_2.Element;

export declare function PetraWalletIcon(p: IconProps): JSX_2.Element;

export declare function PieChartIcon(p: IconProps): JSX_2.Element;

/**
 * PixelAvatarIcon — Blockie-style pixel art avatar clipped to a circle.
 * Recreated from the Figma Wallet design. Uses PCS primary (#1FC7D4) and failure (#ED4B9E).
 */
export declare function PixelAvatarIcon({ size, ...props }: IconProps): JSX_2.Element;

export declare type Placement = 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';

export declare function PlayCircleOutlineIcon(p: IconProps): JSX_2.Element;

export declare const PlusIcon: typeof AddIcon;

export declare function PocketWatchIcon(p: IconProps): JSX_2.Element;

declare type PolymorphicComponent<P, D extends ElementType = "button"> = <E extends ElementType = D>(props: PolymorphicComponentProps<E, P>) => React.ReactElement | null;

declare type PolymorphicComponentProps<E extends ElementType, P> = P & {
    as?: E;
} & Omit<ComponentPropsWithRef<E>, keyof P | "as">;

export declare function PoolIcon(p: IconProps): JSX_2.Element;

export declare function PoolsChartIcon(p: IconProps): JSX_2.Element;

export declare function PoolTypeIcon(p: IconProps): JSX_2.Element;

export declare function PredictionsIcon(p: IconProps): JSX_2.Element;

export declare function PresentCheckIcon(p: IconProps): JSX_2.Element;

export declare function PresentNoneIcon(p: IconProps): JSX_2.Element;

export declare function PresentWonIcon(p: IconProps): JSX_2.Element;

export declare const PreTitle: (props: PropsWithChildren<TextProps & {
    onClick?: () => void;
}>) => JSX_2.Element;

export declare function PrizeIcon(p: IconProps): JSX_2.Element;

export declare function ProgressBunnyIcon(p: IconProps): JSX_2.Element;

export declare function ProposalIcon(p: IconProps): JSX_2.Element;

export declare const Radio: IStyledComponent<"web", Substitute<    {
size?: number | undefined | undefined;
children?: ReactNode;
"aria-label"?: string | undefined | undefined;
suppressHydrationWarning?: boolean | undefined | undefined;
className?: string | undefined | undefined;
color?: string | undefined | undefined;
height?: number | string | undefined | undefined;
id?: string | undefined | undefined;
lang?: string | undefined | undefined;
max?: number | string | undefined | undefined;
min?: number | string | undefined | undefined;
name?: string | undefined | undefined;
style?: CSSProperties | undefined;
type?: HTMLInputTypeAttribute | undefined;
width?: number | string | undefined | undefined;
role?: AriaRole | undefined;
tabIndex?: number | undefined | undefined;
"aria-activedescendant"?: string | undefined | undefined;
"aria-atomic"?: (boolean | "true" | "false") | undefined;
"aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined | undefined;
"aria-braillelabel"?: string | undefined | undefined;
"aria-brailleroledescription"?: string | undefined | undefined;
"aria-busy"?: (boolean | "true" | "false") | undefined;
"aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-colcount"?: number | undefined | undefined;
"aria-colindex"?: number | undefined | undefined;
"aria-colindextext"?: string | undefined | undefined;
"aria-colspan"?: number | undefined | undefined;
"aria-controls"?: string | undefined | undefined;
"aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined | undefined;
"aria-describedby"?: string | undefined | undefined;
"aria-description"?: string | undefined | undefined;
"aria-details"?: string | undefined | undefined;
"aria-disabled"?: (boolean | "true" | "false") | undefined;
"aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined | undefined;
"aria-errormessage"?: string | undefined | undefined;
"aria-expanded"?: (boolean | "true" | "false") | undefined;
"aria-flowto"?: string | undefined | undefined;
"aria-grabbed"?: (boolean | "true" | "false") | undefined;
"aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined | undefined;
"aria-hidden"?: (boolean | "true" | "false") | undefined;
"aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined | undefined;
"aria-keyshortcuts"?: string | undefined | undefined;
"aria-labelledby"?: string | undefined | undefined;
"aria-level"?: number | undefined | undefined;
"aria-live"?: "off" | "assertive" | "polite" | undefined | undefined;
"aria-modal"?: (boolean | "true" | "false") | undefined;
"aria-multiline"?: (boolean | "true" | "false") | undefined;
"aria-multiselectable"?: (boolean | "true" | "false") | undefined;
"aria-orientation"?: "horizontal" | "vertical" | undefined | undefined;
"aria-owns"?: string | undefined | undefined;
"aria-placeholder"?: string | undefined | undefined;
"aria-posinset"?: number | undefined | undefined;
"aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-readonly"?: (boolean | "true" | "false") | undefined;
"aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined | undefined;
"aria-required"?: (boolean | "true" | "false") | undefined;
"aria-roledescription"?: string | undefined | undefined;
"aria-rowcount"?: number | undefined | undefined;
"aria-rowindex"?: number | undefined | undefined;
"aria-rowindextext"?: string | undefined | undefined;
"aria-rowspan"?: number | undefined | undefined;
"aria-selected"?: (boolean | "true" | "false") | undefined;
"aria-setsize"?: number | undefined | undefined;
"aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined | undefined;
"aria-valuemax"?: number | undefined | undefined;
"aria-valuemin"?: number | undefined | undefined;
"aria-valuenow"?: number | undefined | undefined;
"aria-valuetext"?: string | undefined | undefined;
dangerouslySetInnerHTML?: {
__html: string | TrustedHTML;
} | undefined | undefined;
onCopy?: ClipboardEventHandler<HTMLInputElement> | undefined;
onCopyCapture?: ClipboardEventHandler<HTMLInputElement> | undefined;
onCut?: ClipboardEventHandler<HTMLInputElement> | undefined;
onCutCapture?: ClipboardEventHandler<HTMLInputElement> | undefined;
onPaste?: ClipboardEventHandler<HTMLInputElement> | undefined;
onPasteCapture?: ClipboardEventHandler<HTMLInputElement> | undefined;
onCompositionEnd?: CompositionEventHandler<HTMLInputElement> | undefined;
onCompositionEndCapture?: CompositionEventHandler<HTMLInputElement> | undefined;
onCompositionStart?: CompositionEventHandler<HTMLInputElement> | undefined;
onCompositionStartCapture?: CompositionEventHandler<HTMLInputElement> | undefined;
onCompositionUpdate?: CompositionEventHandler<HTMLInputElement> | undefined;
onCompositionUpdateCapture?: CompositionEventHandler<HTMLInputElement> | undefined;
onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
onFocusCapture?: FocusEventHandler<HTMLInputElement> | undefined;
onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
onBlurCapture?: FocusEventHandler<HTMLInputElement> | undefined;
onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
onChangeCapture?: FormEventHandler<HTMLInputElement> | undefined;
onBeforeInput?: InputEventHandler<HTMLInputElement> | undefined;
onBeforeInputCapture?: FormEventHandler<HTMLInputElement> | undefined;
onInput?: FormEventHandler<HTMLInputElement> | undefined;
onInputCapture?: FormEventHandler<HTMLInputElement> | undefined;
onReset?: FormEventHandler<HTMLInputElement> | undefined;
onResetCapture?: FormEventHandler<HTMLInputElement> | undefined;
onSubmit?: FormEventHandler<HTMLInputElement> | undefined;
onSubmitCapture?: FormEventHandler<HTMLInputElement> | undefined;
onInvalid?: FormEventHandler<HTMLInputElement> | undefined;
onInvalidCapture?: FormEventHandler<HTMLInputElement> | undefined;
onLoad?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onError?: ReactEventHandler<HTMLInputElement> | undefined;
onErrorCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
onKeyDownCapture?: KeyboardEventHandler<HTMLInputElement> | undefined;
onKeyPress?: KeyboardEventHandler<HTMLInputElement> | undefined;
onKeyPressCapture?: KeyboardEventHandler<HTMLInputElement> | undefined;
onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined;
onKeyUpCapture?: KeyboardEventHandler<HTMLInputElement> | undefined;
onAbort?: ReactEventHandler<HTMLInputElement> | undefined;
onAbortCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onCanPlay?: ReactEventHandler<HTMLInputElement> | undefined;
onCanPlayCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onCanPlayThrough?: ReactEventHandler<HTMLInputElement> | undefined;
onCanPlayThroughCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onDurationChange?: ReactEventHandler<HTMLInputElement> | undefined;
onDurationChangeCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onEmptied?: ReactEventHandler<HTMLInputElement> | undefined;
onEmptiedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onEncrypted?: ReactEventHandler<HTMLInputElement> | undefined;
onEncryptedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onEnded?: ReactEventHandler<HTMLInputElement> | undefined;
onEndedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadedData?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadedDataCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadedMetadata?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadedMetadataCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadStart?: ReactEventHandler<HTMLInputElement> | undefined;
onLoadStartCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onPause?: ReactEventHandler<HTMLInputElement> | undefined;
onPauseCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onPlay?: ReactEventHandler<HTMLInputElement> | undefined;
onPlayCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onPlaying?: ReactEventHandler<HTMLInputElement> | undefined;
onPlayingCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onProgress?: ReactEventHandler<HTMLInputElement> | undefined;
onProgressCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onRateChange?: ReactEventHandler<HTMLInputElement> | undefined;
onRateChangeCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onSeeked?: ReactEventHandler<HTMLInputElement> | undefined;
onSeekedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onSeeking?: ReactEventHandler<HTMLInputElement> | undefined;
onSeekingCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onStalled?: ReactEventHandler<HTMLInputElement> | undefined;
onStalledCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onSuspend?: ReactEventHandler<HTMLInputElement> | undefined;
onSuspendCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onTimeUpdate?: ReactEventHandler<HTMLInputElement> | undefined;
onTimeUpdateCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onVolumeChange?: ReactEventHandler<HTMLInputElement> | undefined;
onVolumeChangeCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onWaiting?: ReactEventHandler<HTMLInputElement> | undefined;
onWaitingCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onAuxClick?: MouseEventHandler<HTMLInputElement> | undefined;
onAuxClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onClick?: MouseEventHandler<HTMLInputElement> | undefined;
onClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onContextMenu?: MouseEventHandler<HTMLInputElement> | undefined;
onContextMenuCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onDoubleClick?: MouseEventHandler<HTMLInputElement> | undefined;
onDoubleClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onDrag?: DragEventHandler<HTMLInputElement> | undefined;
onDragCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragEnd?: DragEventHandler<HTMLInputElement> | undefined;
onDragEndCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragEnter?: DragEventHandler<HTMLInputElement> | undefined;
onDragEnterCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragExit?: DragEventHandler<HTMLInputElement> | undefined;
onDragExitCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragLeave?: DragEventHandler<HTMLInputElement> | undefined;
onDragLeaveCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragOver?: DragEventHandler<HTMLInputElement> | undefined;
onDragOverCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDragStart?: DragEventHandler<HTMLInputElement> | undefined;
onDragStartCapture?: DragEventHandler<HTMLInputElement> | undefined;
onDrop?: DragEventHandler<HTMLInputElement> | undefined;
onDropCapture?: DragEventHandler<HTMLInputElement> | undefined;
onMouseDown?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseDownCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseEnter?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseLeave?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseMove?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseMoveCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseOut?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseOutCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseOver?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseOverCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseUp?: MouseEventHandler<HTMLInputElement> | undefined;
onMouseUpCapture?: MouseEventHandler<HTMLInputElement> | undefined;
onSelect?: ReactEventHandler<HTMLInputElement> | undefined;
onSelectCapture?: ReactEventHandler<HTMLInputElement> | undefined;
onTouchCancel?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchCancelCapture?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchEnd?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchEndCapture?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchMove?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchMoveCapture?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchStart?: TouchEventHandler<HTMLInputElement> | undefined;
onTouchStartCapture?: TouchEventHandler<HTMLInputElement> | undefined;
onPointerDown?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerDownCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerMove?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerMoveCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerUp?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerUpCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerCancel?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerCancelCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerEnter?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerLeave?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerOver?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerOverCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerOut?: PointerEventHandler<HTMLInputElement> | undefined;
onPointerOutCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onGotPointerCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onGotPointerCaptureCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onLostPointerCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onLostPointerCaptureCapture?: PointerEventHandler<HTMLInputElement> | undefined;
onScroll?: UIEventHandler<HTMLInputElement> | undefined;
onScrollCapture?: UIEventHandler<HTMLInputElement> | undefined;
onWheel?: WheelEventHandler<HTMLInputElement> | undefined;
onWheelCapture?: WheelEventHandler<HTMLInputElement> | undefined;
onAnimationStart?: AnimationEventHandler<HTMLInputElement> | undefined;
onAnimationStartCapture?: AnimationEventHandler<HTMLInputElement> | undefined;
onAnimationEnd?: AnimationEventHandler<HTMLInputElement> | undefined;
onAnimationEndCapture?: AnimationEventHandler<HTMLInputElement> | undefined;
onAnimationIteration?: AnimationEventHandler<HTMLInputElement> | undefined;
onAnimationIterationCapture?: AnimationEventHandler<HTMLInputElement> | undefined;
onTransitionEnd?: TransitionEventHandler<HTMLInputElement> | undefined;
onTransitionEndCapture?: TransitionEventHandler<HTMLInputElement> | undefined;
key?: Key | null | undefined;
form?: string | undefined | undefined;
list?: string | undefined | undefined;
slot?: string | undefined | undefined;
title?: string | undefined | undefined;
pattern?: string | undefined | undefined;
defaultChecked?: boolean | undefined | undefined;
defaultValue?: string | number | readonly string[] | undefined;
suppressContentEditableWarning?: boolean | undefined | undefined;
accessKey?: string | undefined | undefined;
autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {}) | undefined;
autoFocus?: boolean | undefined | undefined;
contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
contextMenu?: string | undefined | undefined;
dir?: string | undefined | undefined;
draggable?: (boolean | "true" | "false") | undefined;
enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined | undefined;
hidden?: boolean | undefined | undefined;
nonce?: string | undefined | undefined;
spellCheck?: (boolean | "true" | "false") | undefined;
translate?: "yes" | "no" | undefined | undefined;
radioGroup?: string | undefined | undefined;
about?: string | undefined | undefined;
content?: string | undefined | undefined;
datatype?: string | undefined | undefined;
inlist?: any;
prefix?: string | undefined | undefined;
property?: string | undefined | undefined;
rel?: string | undefined | undefined;
resource?: string | undefined | undefined;
rev?: string | undefined | undefined;
typeof?: string | undefined | undefined;
vocab?: string | undefined | undefined;
autoCorrect?: string | undefined | undefined;
autoSave?: string | undefined | undefined;
itemProp?: string | undefined | undefined;
itemScope?: boolean | undefined | undefined;
itemType?: string | undefined | undefined;
itemID?: string | undefined | undefined;
itemRef?: string | undefined | undefined;
results?: number | undefined | undefined;
security?: string | undefined | undefined;
unselectable?: "on" | "off" | undefined | undefined;
inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined | undefined;
is?: string | undefined | undefined;
exportparts?: string | undefined | undefined;
part?: string | undefined | undefined;
'data-pr-tooltip'?: string | undefined | undefined;
'data-pr-disabled'?: boolean | undefined | undefined;
'data-pr-classname'?: string | undefined | undefined;
'data-pr-position'?: "top" | "bottom" | "left" | "right" | "mouse" | undefined | undefined;
'data-pr-my'?: string | undefined | undefined;
'data-pr-at'?: string | undefined | undefined;
'data-pr-event'?: "hover" | "focus" | "both" | undefined | undefined;
'data-pr-showevent'?: string | undefined | undefined;
'data-pr-hideevent'?: string | undefined | undefined;
'data-pr-mousetrack'?: boolean | undefined | undefined;
'data-pr-mousetracktop'?: number | undefined | undefined;
'data-pr-mousetrackleft'?: number | undefined | undefined;
'data-pr-showdelay'?: number | undefined | undefined;
'data-pr-updatedelay'?: number | undefined | undefined;
'data-pr-hidedelay'?: number | undefined | undefined;
'data-pr-autohide'?: boolean | undefined | undefined;
'data-pr-showondisabled'?: boolean | undefined | undefined;
disabled?: boolean | undefined | undefined;
formAction?: string | undefined;
formEncType?: string | undefined | undefined;
formMethod?: string | undefined | undefined;
formNoValidate?: boolean | undefined | undefined;
formTarget?: string | undefined | undefined;
value?: string | number | readonly string[] | undefined;
autoComplete?: HTMLInputAutoCompleteAttribute | undefined;
alt?: string | undefined | undefined;
src?: string | undefined | undefined;
accept?: string | undefined | undefined;
capture?: boolean | "user" | "environment" | undefined | undefined;
checked?: boolean | undefined | undefined;
maxLength?: number | undefined | undefined;
minLength?: number | undefined | undefined;
multiple?: boolean | undefined | undefined;
placeholder?: string | undefined | undefined;
readOnly?: boolean | undefined | undefined;
required?: boolean | undefined | undefined;
step?: number | string | undefined | undefined;
ref?: ((instance: HTMLInputElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLInputElement> | null | undefined;
}, RadioProps>>;

export declare interface RadioProps extends SpaceProps {
    scale?: RadioScales;
}

export declare type RadioScales = (typeof scales_5)[keyof typeof scales_5];

export declare function RedditIcon(p: IconProps): JSX_2.Element;

export declare function RefreshIcon(p: IconProps): JSX_2.Element;

export declare function RemoveIcon(p: IconProps): JSX_2.Element;

export declare function ResourcesFilledIcon(p: IconProps): JSX_2.Element;

export declare function ResourcesIcon(p: IconProps): JSX_2.Element;

export declare function RiskAlertIcon(p: IconProps): JSX_2.Element;

export declare function RocketIcon(p: IconProps): JSX_2.Element;

export declare function RocketSmallIcon(p: IconProps): JSX_2.Element;

export declare function SafePalIcon(p: IconProps): JSX_2.Element;

export declare type Scale = (typeof scales)[keyof typeof scales];

declare const scales: {
    readonly MD: "md";
    readonly SM: "sm";
    readonly XS: "xs";
};

declare const scales_2: {
    readonly XS: "xs";
    readonly SM: "sm";
    readonly MD: "md";
};

declare const scales_3: {
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
};

declare const scales_4: {
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
};

declare const scales_5: {
    readonly SM: "sm";
    readonly MD: "md";
};

declare const scales_6: {
    readonly MD: "md";
    readonly SM: "sm";
};

declare const scales_7: {
    readonly MD: "md";
    readonly LG: "lg";
    readonly XL: "xl";
    readonly XXL: "xxl";
};

export declare function SearchIcon(p: IconProps): JSX_2.Element;

export declare function SellIcon(p: IconProps): JSX_2.Element;

export declare const SettingsIcon: typeof CogIcon;

export declare function ShareIcon(p: IconProps): JSX_2.Element;

export declare function ShieldCheckIcon(p: IconProps): JSX_2.Element;

export declare function ShieldIcon(p: IconProps): JSX_2.Element;

export declare function ShoppingBasketFilledIcon(p: IconProps): JSX_2.Element;

export declare function ShoppingBasketIcon(p: IconProps): JSX_2.Element;

export declare function ShrinkIcon(p: IconProps): JSX_2.Element;

export declare function SingletonIcon(p: IconProps): JSX_2.Element;

export declare const Slider: default_2.FC<default_2.PropsWithChildren<SliderProps>>;

declare interface SliderProps extends BoxProps_2 {
    name: string;
    min: number;
    max: number;
    value: number;
    step?: number | "any";
    onValueChanged: (newValue: number) => void;
    valueLabel?: string;
    disabled?: boolean;
    /** Visual variant. Defaults to `"bunny"`. */
    variant?: SliderVariant;
    /**
     * Step (in percent of the range) between clickable dots when
     * `variant="dotted"`. Defaults to `25` → stops at 0/25/50/75/100.
     */
    dotStep?: number;
}

/**
 * `bunny` (default): the classic bunny-thumb slider.
 * `dotted`: percent-based rail with clickable stops at every `dotStep` (default
 * 25%). Matches the storybook `op-slider` design used in the perps OrderPanel.
 */
declare type SliderVariant = "bunny" | "dotted";

export declare function SmallDotIcon(p: IconProps): JSX_2.Element;

export declare function SmartContractIcon(p: IconProps): JSX_2.Element;

export declare function SocialLoginDiscordIcon(p: IconProps): JSX_2.Element;

export declare function SocialLoginTelegramIcon(p: IconProps): JSX_2.Element;

export declare function SocialLoginXIcon(p: IconProps): JSX_2.Element;

declare enum SORT_ORDER {
    NULL = 0,
    ASC = 1,
    DESC = -1
}

export declare function SortArrowIcon(p: IconProps): JSX_2.Element;

export declare function SortArrowSmallIcon(p: IconProps): JSX_2.Element;

export declare function SortDESCIcon(p: IconProps): JSX_2.Element;

export declare function SortIcon(p: IconProps): JSX_2.Element;

export declare function SplitIcon(p: IconProps): JSX_2.Element;

export declare function SpotGraphIcon(p: IconProps): JSX_2.Element;

export declare function StarCircleIcon(p: IconProps): JSX_2.Element;

export declare function StarFillIcon(p: IconProps): JSX_2.Element;

export declare function StarLineIcon(p: IconProps): JSX_2.Element;

/**
 * Provider-free `useMatchBreakpoints`.
 *
 * Returns the same shape as the uikit hook
 * (`{ isMobile, isTablet, isDesktop, isXs, isSm, isMd, isLg, isXl, isXxl }`)
 * but each call subscribes directly to `window.matchMedia`. We don't
 * read from `MatchBreakpointsContext` because hosts that consume our
 * widget bundle (e.g. pancake-frontend) wrap their app in their own
 * uikit Provider — never ours — so a context-backed hook would always
 * fall back to its default `{ isMobile:false, ... }` and dispatch the
 * desktop variant on mobile viewports.
 *
 * `MatchBreakpointsProvider` is still exported (and used by the
 * storybook canvas decorator) for backward compat, but its state is
 * no longer read here.
 */
declare type State = {
    [key: string]: boolean;
};

export declare function StoreIcon(p: IconProps): JSX_2.Element;

export declare const StyledLink: IStyledComponent<"web", Substitute<    {
"aria-label"?: string | undefined | undefined;
suppressHydrationWarning?: boolean | undefined | undefined;
className?: string | undefined | undefined;
id?: string | undefined | undefined;
lang?: string | undefined | undefined;
role?: default_2.AriaRole | undefined;
tabIndex?: number | undefined | undefined;
"aria-activedescendant"?: string | undefined | undefined;
"aria-atomic"?: (boolean | "true" | "false") | undefined;
"aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined | undefined;
"aria-braillelabel"?: string | undefined | undefined;
"aria-brailleroledescription"?: string | undefined | undefined;
"aria-busy"?: (boolean | "true" | "false") | undefined;
"aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-colcount"?: number | undefined | undefined;
"aria-colindex"?: number | undefined | undefined;
"aria-colindextext"?: string | undefined | undefined;
"aria-colspan"?: number | undefined | undefined;
"aria-controls"?: string | undefined | undefined;
"aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined | undefined;
"aria-describedby"?: string | undefined | undefined;
"aria-description"?: string | undefined | undefined;
"aria-details"?: string | undefined | undefined;
"aria-disabled"?: (boolean | "true" | "false") | undefined;
"aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined | undefined;
"aria-errormessage"?: string | undefined | undefined;
"aria-expanded"?: (boolean | "true" | "false") | undefined;
"aria-flowto"?: string | undefined | undefined;
"aria-grabbed"?: (boolean | "true" | "false") | undefined;
"aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined | undefined;
"aria-hidden"?: (boolean | "true" | "false") | undefined;
"aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined | undefined;
"aria-keyshortcuts"?: string | undefined | undefined;
"aria-labelledby"?: string | undefined | undefined;
"aria-level"?: number | undefined | undefined;
"aria-live"?: "off" | "assertive" | "polite" | undefined | undefined;
"aria-modal"?: (boolean | "true" | "false") | undefined;
"aria-multiline"?: (boolean | "true" | "false") | undefined;
"aria-multiselectable"?: (boolean | "true" | "false") | undefined;
"aria-orientation"?: "horizontal" | "vertical" | undefined | undefined;
"aria-owns"?: string | undefined | undefined;
"aria-placeholder"?: string | undefined | undefined;
"aria-posinset"?: number | undefined | undefined;
"aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-readonly"?: (boolean | "true" | "false") | undefined;
"aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined | undefined;
"aria-required"?: (boolean | "true" | "false") | undefined;
"aria-roledescription"?: string | undefined | undefined;
"aria-rowcount"?: number | undefined | undefined;
"aria-rowindex"?: number | undefined | undefined;
"aria-rowindextext"?: string | undefined | undefined;
"aria-rowspan"?: number | undefined | undefined;
"aria-selected"?: (boolean | "true" | "false") | undefined;
"aria-setsize"?: number | undefined | undefined;
"aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined | undefined;
"aria-valuemax"?: number | undefined | undefined;
"aria-valuemin"?: number | undefined | undefined;
"aria-valuenow"?: number | undefined | undefined;
"aria-valuetext"?: string | undefined | undefined;
dangerouslySetInnerHTML?: {
__html: string | TrustedHTML;
} | undefined | undefined;
onCopy?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onCopyCapture?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onCut?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onCutCapture?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onPaste?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onPasteCapture?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onCompositionEnd?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionEndCapture?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionStart?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionStartCapture?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionUpdate?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionUpdateCapture?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onFocus?: default_2.FocusEventHandler<HTMLDivElement> | undefined;
onFocusCapture?: default_2.FocusEventHandler<HTMLDivElement> | undefined;
onBlur?: default_2.FocusEventHandler<HTMLDivElement> | undefined;
onBlurCapture?: default_2.FocusEventHandler<HTMLDivElement> | undefined;
onChange?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onChangeCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onBeforeInput?: default_2.InputEventHandler<HTMLDivElement> | undefined;
onBeforeInputCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onInput?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onInputCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onReset?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onResetCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onSubmit?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onSubmitCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onInvalid?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onInvalidCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onLoad?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onError?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onErrorCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onKeyDown?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyDownCapture?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyPress?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyPressCapture?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyUp?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyUpCapture?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onAbort?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onAbortCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onCanPlay?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayThrough?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayThroughCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onDurationChange?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onDurationChangeCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEmptied?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEmptiedCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEncrypted?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEncryptedCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEnded?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEndedCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadedData?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadedDataCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadedMetadata?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadedMetadataCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadStart?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadStartCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPause?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPauseCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPlay?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPlayCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPlaying?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPlayingCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onProgress?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onProgressCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onRateChange?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onRateChangeCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSeeked?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSeekedCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSeeking?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSeekingCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onStalled?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onStalledCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSuspend?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSuspendCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onTimeUpdate?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onTimeUpdateCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onVolumeChange?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onVolumeChangeCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onWaiting?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onWaitingCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onAuxClick?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onAuxClickCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onClick?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onClickCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onContextMenu?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onContextMenuCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onDoubleClick?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onDoubleClickCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onDrag?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragEnd?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragEndCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragEnter?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragEnterCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragExit?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragExitCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragLeave?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragLeaveCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragOver?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragOverCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragStart?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragStartCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDrop?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDropCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onMouseDown?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseDownCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseEnter?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseLeave?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseMove?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseMoveCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseOut?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseOutCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseOver?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseOverCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseUp?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseUpCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onSelect?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSelectCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onTouchCancel?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchCancelCapture?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchEnd?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchEndCapture?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchMove?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchMoveCapture?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchStart?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchStartCapture?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onPointerDown?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerDownCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerMove?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerMoveCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerUp?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerUpCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerCancel?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerCancelCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerEnter?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerLeave?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerOver?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerOverCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerOut?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerOutCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onGotPointerCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onGotPointerCaptureCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onLostPointerCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onLostPointerCaptureCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onScroll?: default_2.UIEventHandler<HTMLDivElement> | undefined;
onScrollCapture?: default_2.UIEventHandler<HTMLDivElement> | undefined;
onWheel?: default_2.WheelEventHandler<HTMLDivElement> | undefined;
onWheelCapture?: default_2.WheelEventHandler<HTMLDivElement> | undefined;
onAnimationStart?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationStartCapture?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationEnd?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationEndCapture?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationIteration?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationIterationCapture?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onTransitionEnd?: default_2.TransitionEventHandler<HTMLDivElement> | undefined;
onTransitionEndCapture?: default_2.TransitionEventHandler<HTMLDivElement> | undefined;
key?: default_2.Key | null | undefined;
slot?: string | undefined | undefined;
title?: string | undefined | undefined;
defaultChecked?: boolean | undefined | undefined;
defaultValue?: string | number | readonly string[] | undefined;
suppressContentEditableWarning?: boolean | undefined | undefined;
accessKey?: string | undefined | undefined;
autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {}) | undefined;
autoFocus?: boolean | undefined | undefined;
contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
contextMenu?: string | undefined | undefined;
dir?: string | undefined | undefined;
draggable?: (boolean | "true" | "false") | undefined;
enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined | undefined;
hidden?: boolean | undefined | undefined;
nonce?: string | undefined | undefined;
spellCheck?: (boolean | "true" | "false") | undefined;
translate?: "yes" | "no" | undefined | undefined;
radioGroup?: string | undefined | undefined;
about?: string | undefined | undefined;
content?: string | undefined | undefined;
datatype?: string | undefined | undefined;
inlist?: any;
prefix?: string | undefined | undefined;
property?: string | undefined | undefined;
rel?: string | undefined | undefined;
resource?: string | undefined | undefined;
rev?: string | undefined | undefined;
typeof?: string | undefined | undefined;
vocab?: string | undefined | undefined;
autoCorrect?: string | undefined | undefined;
autoSave?: string | undefined | undefined;
itemProp?: string | undefined | undefined;
itemScope?: boolean | undefined | undefined;
itemType?: string | undefined | undefined;
itemID?: string | undefined | undefined;
itemRef?: string | undefined | undefined;
results?: number | undefined | undefined;
security?: string | undefined | undefined;
unselectable?: "on" | "off" | undefined | undefined;
inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined | undefined;
is?: string | undefined | undefined;
exportparts?: string | undefined | undefined;
part?: string | undefined | undefined;
'data-pr-tooltip'?: string | undefined | undefined;
'data-pr-disabled'?: boolean | undefined | undefined;
'data-pr-classname'?: string | undefined | undefined;
'data-pr-position'?: "top" | "bottom" | "left" | "right" | "mouse" | undefined | undefined;
'data-pr-my'?: string | undefined | undefined;
'data-pr-at'?: string | undefined | undefined;
'data-pr-event'?: "hover" | "focus" | "both" | undefined | undefined;
'data-pr-showevent'?: string | undefined | undefined;
'data-pr-hideevent'?: string | undefined | undefined;
'data-pr-mousetrack'?: boolean | undefined | undefined;
'data-pr-mousetracktop'?: number | undefined | undefined;
'data-pr-mousetrackleft'?: number | undefined | undefined;
'data-pr-showdelay'?: number | undefined | undefined;
'data-pr-updatedelay'?: number | undefined | undefined;
'data-pr-hidedelay'?: number | undefined | undefined;
'data-pr-autohide'?: boolean | undefined | undefined;
'data-pr-showondisabled'?: boolean | undefined | undefined;
ref?: ((instance: HTMLDivElement | null) => void | default_2.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof default_2.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | default_2.RefObject<HTMLDivElement> | null | undefined;
} & TextBaseProps & {
children?: default_2.ReactNode | undefined;
}, LinkProps>>;

export declare const StyledTooltipArrow: IStyledComponent<"web", {
string?: number | string | undefined | undefined;
children?: ReactNode;
viewBox?: string | undefined | undefined;
"aria-label"?: string | undefined | undefined;
suppressHydrationWarning?: boolean | undefined | undefined;
className?: string | undefined | undefined;
color?: string | undefined | undefined;
height?: number | string | undefined | undefined;
id?: string | undefined | undefined;
lang?: string | undefined | undefined;
max?: number | string | undefined | undefined;
media?: string | undefined | undefined;
method?: string | undefined | undefined;
min?: number | string | undefined | undefined;
name?: string | undefined | undefined;
style?: CSSProperties | undefined;
target?: string | undefined | undefined;
type?: string | undefined | undefined;
width?: number | string | undefined | undefined;
role?: AriaRole | undefined;
tabIndex?: number | undefined | undefined;
crossOrigin?: "" | "anonymous" | "use-credentials" | undefined;
accentHeight?: number | string | undefined | undefined;
accumulate?: "none" | "sum" | undefined | undefined;
additive?: "replace" | "sum" | undefined | undefined;
alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit" | undefined | undefined;
allowReorder?: "no" | "yes" | undefined | undefined;
alphabetic?: number | string | undefined | undefined;
amplitude?: number | string | undefined | undefined;
arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined | undefined;
ascent?: number | string | undefined | undefined;
attributeName?: string | undefined | undefined;
attributeType?: string | undefined | undefined;
autoReverse?: (boolean | "true" | "false") | undefined;
azimuth?: number | string | undefined | undefined;
baseFrequency?: number | string | undefined | undefined;
baselineShift?: number | string | undefined | undefined;
baseProfile?: number | string | undefined | undefined;
bbox?: number | string | undefined | undefined;
begin?: number | string | undefined | undefined;
bias?: number | string | undefined | undefined;
by?: number | string | undefined | undefined;
calcMode?: number | string | undefined | undefined;
capHeight?: number | string | undefined | undefined;
clip?: number | string | undefined | undefined;
clipPath?: string | undefined | undefined;
clipPathUnits?: number | string | undefined | undefined;
clipRule?: number | string | undefined | undefined;
colorInterpolation?: number | string | undefined | undefined;
colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined | undefined;
colorProfile?: number | string | undefined | undefined;
colorRendering?: number | string | undefined | undefined;
contentScriptType?: number | string | undefined | undefined;
contentStyleType?: number | string | undefined | undefined;
cursor?: number | string | undefined | undefined;
cx?: number | string | undefined | undefined;
cy?: number | string | undefined | undefined;
d?: string | undefined | undefined;
decelerate?: number | string | undefined | undefined;
descent?: number | string | undefined | undefined;
diffuseConstant?: number | string | undefined | undefined;
direction?: number | string | undefined | undefined;
display?: number | string | undefined | undefined;
divisor?: number | string | undefined | undefined;
dominantBaseline?: "auto" | "use-script" | "no-change" | "reset-size" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "central" | "middle" | "text-after-edge" | "text-before-edge" | "inherit" | undefined | undefined;
dur?: number | string | undefined | undefined;
dx?: number | string | undefined | undefined;
dy?: number | string | undefined | undefined;
edgeMode?: number | string | undefined | undefined;
elevation?: number | string | undefined | undefined;
enableBackground?: number | string | undefined | undefined;
end?: number | string | undefined | undefined;
exponent?: number | string | undefined | undefined;
externalResourcesRequired?: (boolean | "true" | "false") | undefined;
fill?: string | undefined | undefined;
fillOpacity?: number | string | undefined | undefined;
fillRule?: "nonzero" | "evenodd" | "inherit" | undefined | undefined;
filter?: string | undefined | undefined;
filterRes?: number | string | undefined | undefined;
filterUnits?: number | string | undefined | undefined;
floodColor?: number | string | undefined | undefined;
floodOpacity?: number | string | undefined | undefined;
focusable?: (boolean | "true" | "false") | "auto" | undefined;
fontFamily?: string | undefined | undefined;
fontSize?: number | string | undefined | undefined;
fontSizeAdjust?: number | string | undefined | undefined;
fontStretch?: number | string | undefined | undefined;
fontStyle?: number | string | undefined | undefined;
fontVariant?: number | string | undefined | undefined;
fontWeight?: number | string | undefined | undefined;
format?: number | string | undefined | undefined;
fr?: number | string | undefined | undefined;
from?: number | string | undefined | undefined;
fx?: number | string | undefined | undefined;
fy?: number | string | undefined | undefined;
g1?: number | string | undefined | undefined;
g2?: number | string | undefined | undefined;
glyphName?: number | string | undefined | undefined;
glyphOrientationHorizontal?: number | string | undefined | undefined;
glyphOrientationVertical?: number | string | undefined | undefined;
glyphRef?: number | string | undefined | undefined;
gradientTransform?: string | undefined | undefined;
gradientUnits?: string | undefined | undefined;
hanging?: number | string | undefined | undefined;
horizAdvX?: number | string | undefined | undefined;
horizOriginX?: number | string | undefined | undefined;
href?: string | undefined | undefined;
ideographic?: number | string | undefined | undefined;
imageRendering?: number | string | undefined | undefined;
in2?: number | string | undefined | undefined;
in?: string | undefined | undefined;
intercept?: number | string | undefined | undefined;
k1?: number | string | undefined | undefined;
k2?: number | string | undefined | undefined;
k3?: number | string | undefined | undefined;
k4?: number | string | undefined | undefined;
k?: number | string | undefined | undefined;
kernelMatrix?: number | string | undefined | undefined;
kernelUnitLength?: number | string | undefined | undefined;
kerning?: number | string | undefined | undefined;
keyPoints?: number | string | undefined | undefined;
keySplines?: number | string | undefined | undefined;
keyTimes?: number | string | undefined | undefined;
lengthAdjust?: number | string | undefined | undefined;
letterSpacing?: number | string | undefined | undefined;
lightingColor?: number | string | undefined | undefined;
limitingConeAngle?: number | string | undefined | undefined;
local?: number | string | undefined | undefined;
markerEnd?: string | undefined | undefined;
markerHeight?: number | string | undefined | undefined;
markerMid?: string | undefined | undefined;
markerStart?: string | undefined | undefined;
markerUnits?: number | string | undefined | undefined;
markerWidth?: number | string | undefined | undefined;
mask?: string | undefined | undefined;
maskContentUnits?: number | string | undefined | undefined;
maskUnits?: number | string | undefined | undefined;
mathematical?: number | string | undefined | undefined;
mode?: number | string | undefined | undefined;
numOctaves?: number | string | undefined | undefined;
offset?: number | string | undefined | undefined;
opacity?: number | string | undefined | undefined;
operator?: number | string | undefined | undefined;
order?: number | string | undefined | undefined;
orient?: number | string | undefined | undefined;
orientation?: number | string | undefined | undefined;
origin?: number | string | undefined | undefined;
overflow?: number | string | undefined | undefined;
overlinePosition?: number | string | undefined | undefined;
overlineThickness?: number | string | undefined | undefined;
paintOrder?: number | string | undefined | undefined;
panose1?: number | string | undefined | undefined;
path?: string | undefined | undefined;
pathLength?: number | string | undefined | undefined;
patternContentUnits?: string | undefined | undefined;
patternTransform?: number | string | undefined | undefined;
patternUnits?: string | undefined | undefined;
pointerEvents?: number | string | undefined | undefined;
points?: string | undefined | undefined;
pointsAtX?: number | string | undefined | undefined;
pointsAtY?: number | string | undefined | undefined;
pointsAtZ?: number | string | undefined | undefined;
preserveAlpha?: (boolean | "true" | "false") | undefined;
preserveAspectRatio?: string | undefined | undefined;
primitiveUnits?: number | string | undefined | undefined;
r?: number | string | undefined | undefined;
radius?: number | string | undefined | undefined;
refX?: number | string | undefined | undefined;
refY?: number | string | undefined | undefined;
renderingIntent?: number | string | undefined | undefined;
repeatCount?: number | string | undefined | undefined;
repeatDur?: number | string | undefined | undefined;
requiredExtensions?: number | string | undefined | undefined;
requiredFeatures?: number | string | undefined | undefined;
restart?: number | string | undefined | undefined;
result?: string | undefined | undefined;
rotate?: number | string | undefined | undefined;
rx?: number | string | undefined | undefined;
ry?: number | string | undefined | undefined;
scale?: number | string | undefined | undefined;
seed?: number | string | undefined | undefined;
shapeRendering?: number | string | undefined | undefined;
slope?: number | string | undefined | undefined;
spacing?: number | string | undefined | undefined;
specularConstant?: number | string | undefined | undefined;
specularExponent?: number | string | undefined | undefined;
speed?: number | string | undefined | undefined;
spreadMethod?: string | undefined | undefined;
startOffset?: number | string | undefined | undefined;
stdDeviation?: number | string | undefined | undefined;
stemh?: number | string | undefined | undefined;
stemv?: number | string | undefined | undefined;
stitchTiles?: number | string | undefined | undefined;
stopColor?: string | undefined | undefined;
stopOpacity?: number | string | undefined | undefined;
strikethroughPosition?: number | string | undefined | undefined;
strikethroughThickness?: number | string | undefined | undefined;
stroke?: string | undefined | undefined;
strokeDasharray?: string | number | undefined | undefined;
strokeDashoffset?: string | number | undefined | undefined;
strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined | undefined;
strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined | undefined;
strokeMiterlimit?: number | string | undefined | undefined;
strokeOpacity?: number | string | undefined | undefined;
strokeWidth?: number | string | undefined | undefined;
surfaceScale?: number | string | undefined | undefined;
systemLanguage?: number | string | undefined | undefined;
tableValues?: number | string | undefined | undefined;
targetX?: number | string | undefined | undefined;
targetY?: number | string | undefined | undefined;
textAnchor?: "start" | "middle" | "end" | "inherit" | undefined | undefined;
textDecoration?: number | string | undefined | undefined;
textLength?: number | string | undefined | undefined;
textRendering?: number | string | undefined | undefined;
to?: number | string | undefined | undefined;
transform?: string | undefined | undefined;
transformOrigin?: string | undefined | undefined;
u1?: number | string | undefined | undefined;
u2?: number | string | undefined | undefined;
underlinePosition?: number | string | undefined | undefined;
underlineThickness?: number | string | undefined | undefined;
unicode?: number | string | undefined | undefined;
unicodeBidi?: number | string | undefined | undefined;
unicodeRange?: number | string | undefined | undefined;
unitsPerEm?: number | string | undefined | undefined;
vAlphabetic?: number | string | undefined | undefined;
values?: string | undefined | undefined;
vectorEffect?: number | string | undefined | undefined;
version?: string | undefined | undefined;
vertAdvY?: number | string | undefined | undefined;
vertOriginX?: number | string | undefined | undefined;
vertOriginY?: number | string | undefined | undefined;
vHanging?: number | string | undefined | undefined;
vIdeographic?: number | string | undefined | undefined;
viewTarget?: number | string | undefined | undefined;
visibility?: number | string | undefined | undefined;
vMathematical?: number | string | undefined | undefined;
widths?: number | string | undefined | undefined;
wordSpacing?: number | string | undefined | undefined;
writingMode?: number | string | undefined | undefined;
x1?: number | string | undefined | undefined;
x2?: number | string | undefined | undefined;
x?: number | string | undefined | undefined;
xChannelSelector?: string | undefined | undefined;
xHeight?: number | string | undefined | undefined;
xlinkActuate?: string | undefined | undefined;
xlinkArcrole?: string | undefined | undefined;
xlinkHref?: string | undefined | undefined;
xlinkRole?: string | undefined | undefined;
xlinkShow?: string | undefined | undefined;
xlinkTitle?: string | undefined | undefined;
xlinkType?: string | undefined | undefined;
xmlBase?: string | undefined | undefined;
xmlLang?: string | undefined | undefined;
xmlns?: string | undefined | undefined;
xmlnsXlink?: string | undefined | undefined;
xmlSpace?: string | undefined | undefined;
y1?: number | string | undefined | undefined;
y2?: number | string | undefined | undefined;
y?: number | string | undefined | undefined;
yChannelSelector?: string | undefined | undefined;
z?: number | string | undefined | undefined;
zoomAndPan?: string | undefined | undefined;
"aria-activedescendant"?: string | undefined | undefined;
"aria-atomic"?: (boolean | "true" | "false") | undefined;
"aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined | undefined;
"aria-braillelabel"?: string | undefined | undefined;
"aria-brailleroledescription"?: string | undefined | undefined;
"aria-busy"?: (boolean | "true" | "false") | undefined;
"aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-colcount"?: number | undefined | undefined;
"aria-colindex"?: number | undefined | undefined;
"aria-colindextext"?: string | undefined | undefined;
"aria-colspan"?: number | undefined | undefined;
"aria-controls"?: string | undefined | undefined;
"aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined | undefined;
"aria-describedby"?: string | undefined | undefined;
"aria-description"?: string | undefined | undefined;
"aria-details"?: string | undefined | undefined;
"aria-disabled"?: (boolean | "true" | "false") | undefined;
"aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined | undefined;
"aria-errormessage"?: string | undefined | undefined;
"aria-expanded"?: (boolean | "true" | "false") | undefined;
"aria-flowto"?: string | undefined | undefined;
"aria-grabbed"?: (boolean | "true" | "false") | undefined;
"aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined | undefined;
"aria-hidden"?: (boolean | "true" | "false") | undefined;
"aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined | undefined;
"aria-keyshortcuts"?: string | undefined | undefined;
"aria-labelledby"?: string | undefined | undefined;
"aria-level"?: number | undefined | undefined;
"aria-live"?: "off" | "assertive" | "polite" | undefined | undefined;
"aria-modal"?: (boolean | "true" | "false") | undefined;
"aria-multiline"?: (boolean | "true" | "false") | undefined;
"aria-multiselectable"?: (boolean | "true" | "false") | undefined;
"aria-orientation"?: "horizontal" | "vertical" | undefined | undefined;
"aria-owns"?: string | undefined | undefined;
"aria-placeholder"?: string | undefined | undefined;
"aria-posinset"?: number | undefined | undefined;
"aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-readonly"?: (boolean | "true" | "false") | undefined;
"aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined | undefined;
"aria-required"?: (boolean | "true" | "false") | undefined;
"aria-roledescription"?: string | undefined | undefined;
"aria-rowcount"?: number | undefined | undefined;
"aria-rowindex"?: number | undefined | undefined;
"aria-rowindextext"?: string | undefined | undefined;
"aria-rowspan"?: number | undefined | undefined;
"aria-selected"?: (boolean | "true" | "false") | undefined;
"aria-setsize"?: number | undefined | undefined;
"aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined | undefined;
"aria-valuemax"?: number | undefined | undefined;
"aria-valuemin"?: number | undefined | undefined;
"aria-valuenow"?: number | undefined | undefined;
"aria-valuetext"?: string | undefined | undefined;
dangerouslySetInnerHTML?: {
__html: string | TrustedHTML;
} | undefined | undefined;
onCopy?: ClipboardEventHandler<SVGSVGElement> | undefined;
onCopyCapture?: ClipboardEventHandler<SVGSVGElement> | undefined;
onCut?: ClipboardEventHandler<SVGSVGElement> | undefined;
onCutCapture?: ClipboardEventHandler<SVGSVGElement> | undefined;
onPaste?: ClipboardEventHandler<SVGSVGElement> | undefined;
onPasteCapture?: ClipboardEventHandler<SVGSVGElement> | undefined;
onCompositionEnd?: CompositionEventHandler<SVGSVGElement> | undefined;
onCompositionEndCapture?: CompositionEventHandler<SVGSVGElement> | undefined;
onCompositionStart?: CompositionEventHandler<SVGSVGElement> | undefined;
onCompositionStartCapture?: CompositionEventHandler<SVGSVGElement> | undefined;
onCompositionUpdate?: CompositionEventHandler<SVGSVGElement> | undefined;
onCompositionUpdateCapture?: CompositionEventHandler<SVGSVGElement> | undefined;
onFocus?: FocusEventHandler<SVGSVGElement> | undefined;
onFocusCapture?: FocusEventHandler<SVGSVGElement> | undefined;
onBlur?: FocusEventHandler<SVGSVGElement> | undefined;
onBlurCapture?: FocusEventHandler<SVGSVGElement> | undefined;
onChange?: FormEventHandler<SVGSVGElement> | undefined;
onChangeCapture?: FormEventHandler<SVGSVGElement> | undefined;
onBeforeInput?: InputEventHandler<SVGSVGElement> | undefined;
onBeforeInputCapture?: FormEventHandler<SVGSVGElement> | undefined;
onInput?: FormEventHandler<SVGSVGElement> | undefined;
onInputCapture?: FormEventHandler<SVGSVGElement> | undefined;
onReset?: FormEventHandler<SVGSVGElement> | undefined;
onResetCapture?: FormEventHandler<SVGSVGElement> | undefined;
onSubmit?: FormEventHandler<SVGSVGElement> | undefined;
onSubmitCapture?: FormEventHandler<SVGSVGElement> | undefined;
onInvalid?: FormEventHandler<SVGSVGElement> | undefined;
onInvalidCapture?: FormEventHandler<SVGSVGElement> | undefined;
onLoad?: ReactEventHandler<SVGSVGElement> | undefined;
onLoadCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onError?: ReactEventHandler<SVGSVGElement> | undefined;
onErrorCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onKeyDown?: KeyboardEventHandler<SVGSVGElement> | undefined;
onKeyDownCapture?: KeyboardEventHandler<SVGSVGElement> | undefined;
onKeyPress?: KeyboardEventHandler<SVGSVGElement> | undefined;
onKeyPressCapture?: KeyboardEventHandler<SVGSVGElement> | undefined;
onKeyUp?: KeyboardEventHandler<SVGSVGElement> | undefined;
onKeyUpCapture?: KeyboardEventHandler<SVGSVGElement> | undefined;
onAbort?: ReactEventHandler<SVGSVGElement> | undefined;
onAbortCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onCanPlay?: ReactEventHandler<SVGSVGElement> | undefined;
onCanPlayCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onCanPlayThrough?: ReactEventHandler<SVGSVGElement> | undefined;
onCanPlayThroughCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onDurationChange?: ReactEventHandler<SVGSVGElement> | undefined;
onDurationChangeCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onEmptied?: ReactEventHandler<SVGSVGElement> | undefined;
onEmptiedCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onEncrypted?: ReactEventHandler<SVGSVGElement> | undefined;
onEncryptedCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onEnded?: ReactEventHandler<SVGSVGElement> | undefined;
onEndedCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onLoadedData?: ReactEventHandler<SVGSVGElement> | undefined;
onLoadedDataCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onLoadedMetadata?: ReactEventHandler<SVGSVGElement> | undefined;
onLoadedMetadataCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onLoadStart?: ReactEventHandler<SVGSVGElement> | undefined;
onLoadStartCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onPause?: ReactEventHandler<SVGSVGElement> | undefined;
onPauseCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onPlay?: ReactEventHandler<SVGSVGElement> | undefined;
onPlayCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onPlaying?: ReactEventHandler<SVGSVGElement> | undefined;
onPlayingCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onProgress?: ReactEventHandler<SVGSVGElement> | undefined;
onProgressCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onRateChange?: ReactEventHandler<SVGSVGElement> | undefined;
onRateChangeCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onSeeked?: ReactEventHandler<SVGSVGElement> | undefined;
onSeekedCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onSeeking?: ReactEventHandler<SVGSVGElement> | undefined;
onSeekingCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onStalled?: ReactEventHandler<SVGSVGElement> | undefined;
onStalledCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onSuspend?: ReactEventHandler<SVGSVGElement> | undefined;
onSuspendCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onTimeUpdate?: ReactEventHandler<SVGSVGElement> | undefined;
onTimeUpdateCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onVolumeChange?: ReactEventHandler<SVGSVGElement> | undefined;
onVolumeChangeCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onWaiting?: ReactEventHandler<SVGSVGElement> | undefined;
onWaitingCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onAuxClick?: MouseEventHandler<SVGSVGElement> | undefined;
onAuxClickCapture?: MouseEventHandler<SVGSVGElement> | undefined;
onClick?: MouseEventHandler<SVGSVGElement> | undefined;
onClickCapture?: MouseEventHandler<SVGSVGElement> | undefined;
onContextMenu?: MouseEventHandler<SVGSVGElement> | undefined;
onContextMenuCapture?: MouseEventHandler<SVGSVGElement> | undefined;
onDoubleClick?: MouseEventHandler<SVGSVGElement> | undefined;
onDoubleClickCapture?: MouseEventHandler<SVGSVGElement> | undefined;
onDrag?: DragEventHandler<SVGSVGElement> | undefined;
onDragCapture?: DragEventHandler<SVGSVGElement> | undefined;
onDragEnd?: DragEventHandler<SVGSVGElement> | undefined;
onDragEndCapture?: DragEventHandler<SVGSVGElement> | undefined;
onDragEnter?: DragEventHandler<SVGSVGElement> | undefined;
onDragEnterCapture?: DragEventHandler<SVGSVGElement> | undefined;
onDragExit?: DragEventHandler<SVGSVGElement> | undefined;
onDragExitCapture?: DragEventHandler<SVGSVGElement> | undefined;
onDragLeave?: DragEventHandler<SVGSVGElement> | undefined;
onDragLeaveCapture?: DragEventHandler<SVGSVGElement> | undefined;
onDragOver?: DragEventHandler<SVGSVGElement> | undefined;
onDragOverCapture?: DragEventHandler<SVGSVGElement> | undefined;
onDragStart?: DragEventHandler<SVGSVGElement> | undefined;
onDragStartCapture?: DragEventHandler<SVGSVGElement> | undefined;
onDrop?: DragEventHandler<SVGSVGElement> | undefined;
onDropCapture?: DragEventHandler<SVGSVGElement> | undefined;
onMouseDown?: MouseEventHandler<SVGSVGElement> | undefined;
onMouseDownCapture?: MouseEventHandler<SVGSVGElement> | undefined;
onMouseEnter?: MouseEventHandler<SVGSVGElement> | undefined;
onMouseLeave?: MouseEventHandler<SVGSVGElement> | undefined;
onMouseMove?: MouseEventHandler<SVGSVGElement> | undefined;
onMouseMoveCapture?: MouseEventHandler<SVGSVGElement> | undefined;
onMouseOut?: MouseEventHandler<SVGSVGElement> | undefined;
onMouseOutCapture?: MouseEventHandler<SVGSVGElement> | undefined;
onMouseOver?: MouseEventHandler<SVGSVGElement> | undefined;
onMouseOverCapture?: MouseEventHandler<SVGSVGElement> | undefined;
onMouseUp?: MouseEventHandler<SVGSVGElement> | undefined;
onMouseUpCapture?: MouseEventHandler<SVGSVGElement> | undefined;
onSelect?: ReactEventHandler<SVGSVGElement> | undefined;
onSelectCapture?: ReactEventHandler<SVGSVGElement> | undefined;
onTouchCancel?: TouchEventHandler<SVGSVGElement> | undefined;
onTouchCancelCapture?: TouchEventHandler<SVGSVGElement> | undefined;
onTouchEnd?: TouchEventHandler<SVGSVGElement> | undefined;
onTouchEndCapture?: TouchEventHandler<SVGSVGElement> | undefined;
onTouchMove?: TouchEventHandler<SVGSVGElement> | undefined;
onTouchMoveCapture?: TouchEventHandler<SVGSVGElement> | undefined;
onTouchStart?: TouchEventHandler<SVGSVGElement> | undefined;
onTouchStartCapture?: TouchEventHandler<SVGSVGElement> | undefined;
onPointerDown?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerDownCapture?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerMove?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerMoveCapture?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerUp?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerUpCapture?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerCancel?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerCancelCapture?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerEnter?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerLeave?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerOver?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerOverCapture?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerOut?: PointerEventHandler<SVGSVGElement> | undefined;
onPointerOutCapture?: PointerEventHandler<SVGSVGElement> | undefined;
onGotPointerCapture?: PointerEventHandler<SVGSVGElement> | undefined;
onGotPointerCaptureCapture?: PointerEventHandler<SVGSVGElement> | undefined;
onLostPointerCapture?: PointerEventHandler<SVGSVGElement> | undefined;
onLostPointerCaptureCapture?: PointerEventHandler<SVGSVGElement> | undefined;
onScroll?: UIEventHandler<SVGSVGElement> | undefined;
onScrollCapture?: UIEventHandler<SVGSVGElement> | undefined;
onWheel?: WheelEventHandler<SVGSVGElement> | undefined;
onWheelCapture?: WheelEventHandler<SVGSVGElement> | undefined;
onAnimationStart?: AnimationEventHandler<SVGSVGElement> | undefined;
onAnimationStartCapture?: AnimationEventHandler<SVGSVGElement> | undefined;
onAnimationEnd?: AnimationEventHandler<SVGSVGElement> | undefined;
onAnimationEndCapture?: AnimationEventHandler<SVGSVGElement> | undefined;
onAnimationIteration?: AnimationEventHandler<SVGSVGElement> | undefined;
onAnimationIterationCapture?: AnimationEventHandler<SVGSVGElement> | undefined;
onTransitionEnd?: TransitionEventHandler<SVGSVGElement> | undefined;
onTransitionEndCapture?: TransitionEventHandler<SVGSVGElement> | undefined;
key?: Key | null | undefined;
asChild?: boolean | undefined;
ref?: ((instance: SVGSVGElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<SVGSVGElement> | null | undefined;
}>;

/**
 * Visual port of pancake-frontend's `StyledTooltip` re-expressed on top
 * of `Popover.Content` + `Popover.Arrow`. Radix exposes the resolved
 * placement via `data-side` (top|right|bottom|left) — the original used
 * popper's `data-popper-placement^=`, which we no longer need because
 * Radix gives us the exact side as a discrete attribute.
 */
export declare const StyledTooltipContent: IStyledComponent<"web", {
children?: ReactNode;
"aria-label"?: string | undefined | undefined;
suppressHydrationWarning?: boolean | undefined | undefined;
className?: string | undefined | undefined;
color?: string | undefined | undefined;
id?: string | undefined | undefined;
lang?: string | undefined | undefined;
style?: CSSProperties | undefined;
role?: AriaRole | undefined;
tabIndex?: number | undefined | undefined;
"aria-activedescendant"?: string | undefined | undefined;
"aria-atomic"?: (boolean | "true" | "false") | undefined;
"aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined | undefined;
"aria-braillelabel"?: string | undefined | undefined;
"aria-brailleroledescription"?: string | undefined | undefined;
"aria-busy"?: (boolean | "true" | "false") | undefined;
"aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-colcount"?: number | undefined | undefined;
"aria-colindex"?: number | undefined | undefined;
"aria-colindextext"?: string | undefined | undefined;
"aria-colspan"?: number | undefined | undefined;
"aria-controls"?: string | undefined | undefined;
"aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined | undefined;
"aria-describedby"?: string | undefined | undefined;
"aria-description"?: string | undefined | undefined;
"aria-details"?: string | undefined | undefined;
"aria-disabled"?: (boolean | "true" | "false") | undefined;
"aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined | undefined;
"aria-errormessage"?: string | undefined | undefined;
"aria-expanded"?: (boolean | "true" | "false") | undefined;
"aria-flowto"?: string | undefined | undefined;
"aria-grabbed"?: (boolean | "true" | "false") | undefined;
"aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined | undefined;
"aria-hidden"?: (boolean | "true" | "false") | undefined;
"aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined | undefined;
"aria-keyshortcuts"?: string | undefined | undefined;
"aria-labelledby"?: string | undefined | undefined;
"aria-level"?: number | undefined | undefined;
"aria-live"?: "off" | "assertive" | "polite" | undefined | undefined;
"aria-modal"?: (boolean | "true" | "false") | undefined;
"aria-multiline"?: (boolean | "true" | "false") | undefined;
"aria-multiselectable"?: (boolean | "true" | "false") | undefined;
"aria-orientation"?: "horizontal" | "vertical" | undefined | undefined;
"aria-owns"?: string | undefined | undefined;
"aria-placeholder"?: string | undefined | undefined;
"aria-posinset"?: number | undefined | undefined;
"aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-readonly"?: (boolean | "true" | "false") | undefined;
"aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined | undefined;
"aria-required"?: (boolean | "true" | "false") | undefined;
"aria-roledescription"?: string | undefined | undefined;
"aria-rowcount"?: number | undefined | undefined;
"aria-rowindex"?: number | undefined | undefined;
"aria-rowindextext"?: string | undefined | undefined;
"aria-rowspan"?: number | undefined | undefined;
"aria-selected"?: (boolean | "true" | "false") | undefined;
"aria-setsize"?: number | undefined | undefined;
"aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined | undefined;
"aria-valuemax"?: number | undefined | undefined;
"aria-valuemin"?: number | undefined | undefined;
"aria-valuenow"?: number | undefined | undefined;
"aria-valuetext"?: string | undefined | undefined;
dangerouslySetInnerHTML?: {
__html: string | TrustedHTML;
} | undefined | undefined;
onCopy?: ClipboardEventHandler<HTMLDivElement> | undefined;
onCopyCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
onCut?: ClipboardEventHandler<HTMLDivElement> | undefined;
onCutCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
onPaste?: ClipboardEventHandler<HTMLDivElement> | undefined;
onPasteCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
onCompositionEnd?: CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionEndCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionStart?: CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionStartCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionUpdate?: CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionUpdateCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
onFocus?: FocusEventHandler<HTMLDivElement> | undefined;
onFocusCapture?: FocusEventHandler<HTMLDivElement> | undefined;
onBlur?: FocusEventHandler<HTMLDivElement> | undefined;
onBlurCapture?: FocusEventHandler<HTMLDivElement> | undefined;
onChange?: FormEventHandler<HTMLDivElement> | undefined;
onChangeCapture?: FormEventHandler<HTMLDivElement> | undefined;
onBeforeInput?: InputEventHandler<HTMLDivElement> | undefined;
onBeforeInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
onInput?: FormEventHandler<HTMLDivElement> | undefined;
onInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
onReset?: FormEventHandler<HTMLDivElement> | undefined;
onResetCapture?: FormEventHandler<HTMLDivElement> | undefined;
onSubmit?: FormEventHandler<HTMLDivElement> | undefined;
onSubmitCapture?: FormEventHandler<HTMLDivElement> | undefined;
onInvalid?: FormEventHandler<HTMLDivElement> | undefined;
onInvalidCapture?: FormEventHandler<HTMLDivElement> | undefined;
onLoad?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onError?: ReactEventHandler<HTMLDivElement> | undefined;
onErrorCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyPress?: KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyPressCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyUp?: KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyUpCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
onAbort?: ReactEventHandler<HTMLDivElement> | undefined;
onAbortCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onCanPlay?: ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayThrough?: ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayThroughCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onDurationChange?: ReactEventHandler<HTMLDivElement> | undefined;
onDurationChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onEmptied?: ReactEventHandler<HTMLDivElement> | undefined;
onEmptiedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onEncrypted?: ReactEventHandler<HTMLDivElement> | undefined;
onEncryptedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onEnded?: ReactEventHandler<HTMLDivElement> | undefined;
onEndedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadedData?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadedDataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadedMetadata?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadedMetadataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadStart?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadStartCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onPause?: ReactEventHandler<HTMLDivElement> | undefined;
onPauseCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onPlay?: ReactEventHandler<HTMLDivElement> | undefined;
onPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onPlaying?: ReactEventHandler<HTMLDivElement> | undefined;
onPlayingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onProgress?: ReactEventHandler<HTMLDivElement> | undefined;
onProgressCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onRateChange?: ReactEventHandler<HTMLDivElement> | undefined;
onRateChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onSeeked?: ReactEventHandler<HTMLDivElement> | undefined;
onSeekedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onSeeking?: ReactEventHandler<HTMLDivElement> | undefined;
onSeekingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onStalled?: ReactEventHandler<HTMLDivElement> | undefined;
onStalledCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onSuspend?: ReactEventHandler<HTMLDivElement> | undefined;
onSuspendCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onTimeUpdate?: ReactEventHandler<HTMLDivElement> | undefined;
onTimeUpdateCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onVolumeChange?: ReactEventHandler<HTMLDivElement> | undefined;
onVolumeChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onWaiting?: ReactEventHandler<HTMLDivElement> | undefined;
onWaitingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onAuxClick?: MouseEventHandler<HTMLDivElement> | undefined;
onAuxClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onClick?: MouseEventHandler<HTMLDivElement> | undefined;
onClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onContextMenu?: MouseEventHandler<HTMLDivElement> | undefined;
onContextMenuCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onDoubleClick?: MouseEventHandler<HTMLDivElement> | undefined;
onDoubleClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onDrag?: DragEventHandler<HTMLDivElement> | undefined;
onDragCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragEnd?: DragEventHandler<HTMLDivElement> | undefined;
onDragEndCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragEnter?: DragEventHandler<HTMLDivElement> | undefined;
onDragEnterCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragExit?: DragEventHandler<HTMLDivElement> | undefined;
onDragExitCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragLeave?: DragEventHandler<HTMLDivElement> | undefined;
onDragLeaveCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragOver?: DragEventHandler<HTMLDivElement> | undefined;
onDragOverCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragStart?: DragEventHandler<HTMLDivElement> | undefined;
onDragStartCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDrop?: DragEventHandler<HTMLDivElement> | undefined;
onDropCapture?: DragEventHandler<HTMLDivElement> | undefined;
onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseDownCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseEnter?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseMove?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseMoveCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseOut?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseOutCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseOver?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseOverCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseUp?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseUpCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onSelect?: ReactEventHandler<HTMLDivElement> | undefined;
onSelectCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onTouchCancel?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchCancelCapture?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchEnd?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchEndCapture?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchMove?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchMoveCapture?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchStart?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchStartCapture?: TouchEventHandler<HTMLDivElement> | undefined;
onPointerDown?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerDownCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerMove?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerMoveCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerUp?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerUpCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerCancel?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerCancelCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerEnter?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerLeave?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerOver?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerOverCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerOut?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerOutCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onGotPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onGotPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onLostPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onLostPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onScroll?: UIEventHandler<HTMLDivElement> | undefined;
onScrollCapture?: UIEventHandler<HTMLDivElement> | undefined;
onWheel?: WheelEventHandler<HTMLDivElement> | undefined;
onWheelCapture?: WheelEventHandler<HTMLDivElement> | undefined;
onAnimationStart?: AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationStartCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationEnd?: AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationEndCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationIteration?: AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationIterationCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
onTransitionEnd?: TransitionEventHandler<HTMLDivElement> | undefined;
onTransitionEndCapture?: TransitionEventHandler<HTMLDivElement> | undefined;
key?: Key | null | undefined;
slot?: string | undefined | undefined;
title?: string | undefined | undefined;
defaultChecked?: boolean | undefined | undefined;
defaultValue?: string | number | readonly string[] | undefined;
suppressContentEditableWarning?: boolean | undefined | undefined;
accessKey?: string | undefined | undefined;
autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {}) | undefined;
autoFocus?: boolean | undefined | undefined;
contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
contextMenu?: string | undefined | undefined;
dir?: string | undefined | undefined;
draggable?: (boolean | "true" | "false") | undefined;
enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined | undefined;
hidden?: boolean | undefined | undefined;
nonce?: string | undefined | undefined;
spellCheck?: (boolean | "true" | "false") | undefined;
translate?: "yes" | "no" | undefined | undefined;
radioGroup?: string | undefined | undefined;
about?: string | undefined | undefined;
content?: string | undefined | undefined;
datatype?: string | undefined | undefined;
inlist?: any;
prefix?: string | undefined | undefined;
property?: string | undefined | undefined;
rel?: string | undefined | undefined;
resource?: string | undefined | undefined;
rev?: string | undefined | undefined;
typeof?: string | undefined | undefined;
vocab?: string | undefined | undefined;
autoCorrect?: string | undefined | undefined;
autoSave?: string | undefined | undefined;
itemProp?: string | undefined | undefined;
itemScope?: boolean | undefined | undefined;
itemType?: string | undefined | undefined;
itemID?: string | undefined | undefined;
itemRef?: string | undefined | undefined;
results?: number | undefined | undefined;
security?: string | undefined | undefined;
unselectable?: "on" | "off" | undefined | undefined;
inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined | undefined;
is?: string | undefined | undefined;
exportparts?: string | undefined | undefined;
part?: string | undefined | undefined;
'data-pr-tooltip'?: string | undefined | undefined;
'data-pr-disabled'?: boolean | undefined | undefined;
'data-pr-classname'?: string | undefined | undefined;
'data-pr-position'?: "top" | "bottom" | "left" | "right" | "mouse" | undefined | undefined;
'data-pr-my'?: string | undefined | undefined;
'data-pr-at'?: string | undefined | undefined;
'data-pr-event'?: "hover" | "focus" | "both" | undefined | undefined;
'data-pr-showevent'?: string | undefined | undefined;
'data-pr-hideevent'?: string | undefined | undefined;
'data-pr-mousetrack'?: boolean | undefined | undefined;
'data-pr-mousetracktop'?: number | undefined | undefined;
'data-pr-mousetrackleft'?: number | undefined | undefined;
'data-pr-showdelay'?: number | undefined | undefined;
'data-pr-updatedelay'?: number | undefined | undefined;
'data-pr-hidedelay'?: number | undefined | undefined;
'data-pr-autohide'?: boolean | undefined | undefined;
'data-pr-showondisabled'?: boolean | undefined | undefined;
align?: ("end" | "start" | "center") | undefined;
sticky?: "partial" | "always" | undefined;
asChild?: boolean | undefined;
onEscapeKeyDown?: ((event: KeyboardEvent) => void) | undefined;
side?: ("top" | "right" | "bottom" | "left") | undefined;
sideOffset?: number | undefined;
alignOffset?: number | undefined;
arrowPadding?: number | undefined;
avoidCollisions?: boolean | undefined;
collisionBoundary?: ((Element | null) | (Element | null)[]) | undefined;
collisionPadding?: (number | Partial<Record<"top" | "right" | "bottom" | "left", number>>) | undefined;
hideWhenDetached?: boolean | undefined;
updatePositionStrategy?: "optimized" | "always" | undefined;
onPointerDownOutside?: ((event: CustomEvent<{
originalEvent: PointerEvent;
}>) => void) | undefined;
onFocusOutside?: ((event: CustomEvent<{
originalEvent: FocusEvent;
}>) => void) | undefined;
onInteractOutside?: ((event: CustomEvent<{
originalEvent: PointerEvent;
}> | CustomEvent<{
originalEvent: FocusEvent;
}>) => void) | undefined;
onOpenAutoFocus?: ((event: Event) => void) | undefined;
onCloseAutoFocus?: ((event: Event) => void) | undefined;
forceMount?: true | undefined;
ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined;
}>;

export declare function SunIcon(p: IconProps): JSX_2.Element;

export declare function SwapFillIcon(p: IconProps): JSX_2.Element;

export declare function SwapHorizIcon(p: IconProps): JSX_2.Element;

export declare function SwapIcon(p: IconProps): JSX_2.Element;

export declare function SwapVertIcon(p: IconProps): JSX_2.Element;

export declare function SyncAltIcon(p: IconProps): JSX_2.Element;

export declare const Tab: IStyledComponent<"web", Substitute<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, TabProps>>;

export declare const TableView: <T extends BasicDataType>({ columns, data, rowKey, getRowKey: getRowKey_, onSort, sortOrder, sortField, onRowClick, rowStyle, }: ITableViewProps<T>) => JSX_2.Element;

export declare const TabMenu: default_2.FC<default_2.PropsWithChildren<TabMenuProps>>;

export declare interface TabMenuProps {
    activeIndex?: number;
    onItemClick?: (index: number) => void;
    children: React.ReactElement[];
    fullWidth?: boolean;
    gap?: string;
    isColorInverse?: boolean;
    isShowBorderBottom?: boolean;
    variant?: "default" | "text";
}

export declare interface TabProps extends ColorProps {
    isActive?: boolean;
    onClick?: () => void;
    scale?: "md" | "lg";
    variant?: "default" | "text";
}

export declare const Tag: default_2.FC<default_2.PropsWithChildren<TagProps>>;

export declare interface TagProps extends SpaceProps, TypographyProps {
    variant?: TagVariant;
    scale?: TagScale;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    outline?: boolean;
    textTransform?: "uppercase" | "lowercase" | "capitalize";
    style?: React.CSSProperties;
}

declare const tags: {
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    H5: string;
    H6: string;
};

export declare type TagScale = (typeof scales_6)[keyof typeof scales_6];

export declare type TagVariant = (typeof variants_2)[keyof typeof variants_2];

export declare function TeamBattleIcon(p: IconProps): JSX_2.Element;

export declare function TeamPlayerIcon(p: IconProps): JSX_2.Element;

export declare function TelegramIcon(p: IconProps): JSX_2.Element;

export declare function TestnetIcon(p: IconProps): JSX_2.Element;

declare const Text_2: IStyledComponent<"web", Substitute<Substitute<Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined;
}>, TextProps>, TextProps>>;
export { Text_2 as Text }

declare interface TextBaseProps extends SpaceProps, TypographyProps, LayoutProps {
    color?: string;
    bold?: boolean;
    small?: boolean;
    ellipsis?: boolean;
    strikeThrough?: boolean;
    textTransform?: "uppercase" | "lowercase" | "capitalize";
    style?: React.CSSProperties;
}

export declare type TextProps = PropsWithChildren<TextBaseProps>;

export declare function TicketFillIcon(p: IconProps): JSX_2.Element;

export declare function TicketIcon(p: IconProps): JSX_2.Element;

export declare function TicketRoundIcon(p: IconProps): JSX_2.Element;

export declare function TimerIcon(p: IconProps): JSX_2.Element;

export declare const Toast: React.FC<React.PropsWithChildren<ToastProps>>;

declare interface ToastContextApi {
    clear: () => void;
    remove: (id: string | number) => void;
    toastError: ToastSignature;
    toastInfo: ToastSignature;
    toastSuccess: ToastSignature;
    toastWarning: ToastSignature;
}

declare interface ToastData {
    id: string | number;
    type: Types;
    title: string;
    description?: ReactNode;
}

declare interface ToastProps {
    toast: ToastData;
    onRemove: (id: string | number) => void;
}

declare type ToastSignature = (title: string, description?: ReactNode) => string | number;

export declare const ToastsProvider: React.FC<{
    children: ReactNode;
}>;

export declare const toastTypes: {
    readonly SUCCESS: "success";
    readonly DANGER: "danger";
    readonly WARNING: "warning";
    readonly INFO: "info";
};

export declare const Toggle: default_2.FC<default_2.PropsWithChildren<ToggleProps>>;

export declare interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
    scale?: ToggleScales;
    checked?: boolean;
    checkedColor?: keyof Colors;
    defaultColor?: keyof Colors;
    startIcon?: (isActive?: boolean) => ReactNode;
    endIcon?: (isActive?: boolean) => ReactNode;
}

export declare type ToggleScales = (typeof scales_3)[keyof typeof scales_3];

export declare function TokenPocketIcon(p: IconProps): JSX_2.Element;

export declare function TokensOnPCSIcon(p: IconProps): JSX_2.Element;

export declare interface TooltipOptions {
    placement?: Placement;
    trigger?: TriggerType;
    /** Distance in px from the anchor along the chosen side. Pass a single
     * number or a popper-style `[skid, distance]` tuple — the second value
     * is what Radix calls `sideOffset`. */
    tooltipOffset?: [number, number] | number;
    /** Padding from the viewport edge for collision avoidance. */
    tooltipPadding?: number | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    /** Hover-trigger delay before hiding (ms). */
    hideTimeout?: number;
    /** Force the tooltip open regardless of trigger. */
    manualVisible?: boolean;
    /** When true, target-element events bubble normally (default false). */
    avoidToStopPropagation?: boolean;
    /** Render the tooltip in `document.body` (default true). */
    isInPortal?: boolean;
}

export declare interface TooltipRefs {
    /** Callback ref — attach to the trigger element. */
    targetRef: (node: HTMLElement | null) => void;
    /** ReactNode the consumer must render somewhere; self-portals when
     * `isInPortal !== false`. */
    tooltip: ReactNode;
    tooltipVisible: boolean;
    /** Kept for API parity with the uikit hook. Radix repositions
     * automatically, so this is a no-op (typed as nullable for parity). */
    forceUpdate: (() => void) | null;
}

export declare const TooltipText: IStyledComponent<"web", Substitute<    {
"aria-label"?: string | undefined | undefined;
suppressHydrationWarning?: boolean | undefined | undefined;
className?: string | undefined | undefined;
id?: string | undefined | undefined;
lang?: string | undefined | undefined;
role?: AriaRole | undefined;
tabIndex?: number | undefined | undefined;
"aria-activedescendant"?: string | undefined | undefined;
"aria-atomic"?: (boolean | "true" | "false") | undefined;
"aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined | undefined;
"aria-braillelabel"?: string | undefined | undefined;
"aria-brailleroledescription"?: string | undefined | undefined;
"aria-busy"?: (boolean | "true" | "false") | undefined;
"aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-colcount"?: number | undefined | undefined;
"aria-colindex"?: number | undefined | undefined;
"aria-colindextext"?: string | undefined | undefined;
"aria-colspan"?: number | undefined | undefined;
"aria-controls"?: string | undefined | undefined;
"aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined | undefined;
"aria-describedby"?: string | undefined | undefined;
"aria-description"?: string | undefined | undefined;
"aria-details"?: string | undefined | undefined;
"aria-disabled"?: (boolean | "true" | "false") | undefined;
"aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined | undefined;
"aria-errormessage"?: string | undefined | undefined;
"aria-expanded"?: (boolean | "true" | "false") | undefined;
"aria-flowto"?: string | undefined | undefined;
"aria-grabbed"?: (boolean | "true" | "false") | undefined;
"aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined | undefined;
"aria-hidden"?: (boolean | "true" | "false") | undefined;
"aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined | undefined;
"aria-keyshortcuts"?: string | undefined | undefined;
"aria-labelledby"?: string | undefined | undefined;
"aria-level"?: number | undefined | undefined;
"aria-live"?: "off" | "assertive" | "polite" | undefined | undefined;
"aria-modal"?: (boolean | "true" | "false") | undefined;
"aria-multiline"?: (boolean | "true" | "false") | undefined;
"aria-multiselectable"?: (boolean | "true" | "false") | undefined;
"aria-orientation"?: "horizontal" | "vertical" | undefined | undefined;
"aria-owns"?: string | undefined | undefined;
"aria-placeholder"?: string | undefined | undefined;
"aria-posinset"?: number | undefined | undefined;
"aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-readonly"?: (boolean | "true" | "false") | undefined;
"aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined | undefined;
"aria-required"?: (boolean | "true" | "false") | undefined;
"aria-roledescription"?: string | undefined | undefined;
"aria-rowcount"?: number | undefined | undefined;
"aria-rowindex"?: number | undefined | undefined;
"aria-rowindextext"?: string | undefined | undefined;
"aria-rowspan"?: number | undefined | undefined;
"aria-selected"?: (boolean | "true" | "false") | undefined;
"aria-setsize"?: number | undefined | undefined;
"aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined | undefined;
"aria-valuemax"?: number | undefined | undefined;
"aria-valuemin"?: number | undefined | undefined;
"aria-valuenow"?: number | undefined | undefined;
"aria-valuetext"?: string | undefined | undefined;
dangerouslySetInnerHTML?: {
__html: string | TrustedHTML;
} | undefined | undefined;
onCopy?: ClipboardEventHandler<HTMLDivElement> | undefined;
onCopyCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
onCut?: ClipboardEventHandler<HTMLDivElement> | undefined;
onCutCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
onPaste?: ClipboardEventHandler<HTMLDivElement> | undefined;
onPasteCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
onCompositionEnd?: CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionEndCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionStart?: CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionStartCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionUpdate?: CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionUpdateCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
onFocus?: FocusEventHandler<HTMLDivElement> | undefined;
onFocusCapture?: FocusEventHandler<HTMLDivElement> | undefined;
onBlur?: FocusEventHandler<HTMLDivElement> | undefined;
onBlurCapture?: FocusEventHandler<HTMLDivElement> | undefined;
onChange?: FormEventHandler<HTMLDivElement> | undefined;
onChangeCapture?: FormEventHandler<HTMLDivElement> | undefined;
onBeforeInput?: InputEventHandler<HTMLDivElement> | undefined;
onBeforeInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
onInput?: FormEventHandler<HTMLDivElement> | undefined;
onInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
onReset?: FormEventHandler<HTMLDivElement> | undefined;
onResetCapture?: FormEventHandler<HTMLDivElement> | undefined;
onSubmit?: FormEventHandler<HTMLDivElement> | undefined;
onSubmitCapture?: FormEventHandler<HTMLDivElement> | undefined;
onInvalid?: FormEventHandler<HTMLDivElement> | undefined;
onInvalidCapture?: FormEventHandler<HTMLDivElement> | undefined;
onLoad?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onError?: ReactEventHandler<HTMLDivElement> | undefined;
onErrorCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyPress?: KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyPressCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyUp?: KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyUpCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
onAbort?: ReactEventHandler<HTMLDivElement> | undefined;
onAbortCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onCanPlay?: ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayThrough?: ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayThroughCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onDurationChange?: ReactEventHandler<HTMLDivElement> | undefined;
onDurationChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onEmptied?: ReactEventHandler<HTMLDivElement> | undefined;
onEmptiedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onEncrypted?: ReactEventHandler<HTMLDivElement> | undefined;
onEncryptedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onEnded?: ReactEventHandler<HTMLDivElement> | undefined;
onEndedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadedData?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadedDataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadedMetadata?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadedMetadataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadStart?: ReactEventHandler<HTMLDivElement> | undefined;
onLoadStartCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onPause?: ReactEventHandler<HTMLDivElement> | undefined;
onPauseCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onPlay?: ReactEventHandler<HTMLDivElement> | undefined;
onPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onPlaying?: ReactEventHandler<HTMLDivElement> | undefined;
onPlayingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onProgress?: ReactEventHandler<HTMLDivElement> | undefined;
onProgressCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onRateChange?: ReactEventHandler<HTMLDivElement> | undefined;
onRateChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onSeeked?: ReactEventHandler<HTMLDivElement> | undefined;
onSeekedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onSeeking?: ReactEventHandler<HTMLDivElement> | undefined;
onSeekingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onStalled?: ReactEventHandler<HTMLDivElement> | undefined;
onStalledCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onSuspend?: ReactEventHandler<HTMLDivElement> | undefined;
onSuspendCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onTimeUpdate?: ReactEventHandler<HTMLDivElement> | undefined;
onTimeUpdateCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onVolumeChange?: ReactEventHandler<HTMLDivElement> | undefined;
onVolumeChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onWaiting?: ReactEventHandler<HTMLDivElement> | undefined;
onWaitingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onAuxClick?: MouseEventHandler<HTMLDivElement> | undefined;
onAuxClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onClick?: MouseEventHandler<HTMLDivElement> | undefined;
onClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onContextMenu?: MouseEventHandler<HTMLDivElement> | undefined;
onContextMenuCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onDoubleClick?: MouseEventHandler<HTMLDivElement> | undefined;
onDoubleClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onDrag?: DragEventHandler<HTMLDivElement> | undefined;
onDragCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragEnd?: DragEventHandler<HTMLDivElement> | undefined;
onDragEndCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragEnter?: DragEventHandler<HTMLDivElement> | undefined;
onDragEnterCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragExit?: DragEventHandler<HTMLDivElement> | undefined;
onDragExitCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragLeave?: DragEventHandler<HTMLDivElement> | undefined;
onDragLeaveCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragOver?: DragEventHandler<HTMLDivElement> | undefined;
onDragOverCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDragStart?: DragEventHandler<HTMLDivElement> | undefined;
onDragStartCapture?: DragEventHandler<HTMLDivElement> | undefined;
onDrop?: DragEventHandler<HTMLDivElement> | undefined;
onDropCapture?: DragEventHandler<HTMLDivElement> | undefined;
onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseDownCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseEnter?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseMove?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseMoveCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseOut?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseOutCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseOver?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseOverCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseUp?: MouseEventHandler<HTMLDivElement> | undefined;
onMouseUpCapture?: MouseEventHandler<HTMLDivElement> | undefined;
onSelect?: ReactEventHandler<HTMLDivElement> | undefined;
onSelectCapture?: ReactEventHandler<HTMLDivElement> | undefined;
onTouchCancel?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchCancelCapture?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchEnd?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchEndCapture?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchMove?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchMoveCapture?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchStart?: TouchEventHandler<HTMLDivElement> | undefined;
onTouchStartCapture?: TouchEventHandler<HTMLDivElement> | undefined;
onPointerDown?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerDownCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerMove?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerMoveCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerUp?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerUpCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerCancel?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerCancelCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerEnter?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerLeave?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerOver?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerOverCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerOut?: PointerEventHandler<HTMLDivElement> | undefined;
onPointerOutCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onGotPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onGotPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onLostPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onLostPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
onScroll?: UIEventHandler<HTMLDivElement> | undefined;
onScrollCapture?: UIEventHandler<HTMLDivElement> | undefined;
onWheel?: WheelEventHandler<HTMLDivElement> | undefined;
onWheelCapture?: WheelEventHandler<HTMLDivElement> | undefined;
onAnimationStart?: AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationStartCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationEnd?: AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationEndCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationIteration?: AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationIterationCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
onTransitionEnd?: TransitionEventHandler<HTMLDivElement> | undefined;
onTransitionEndCapture?: TransitionEventHandler<HTMLDivElement> | undefined;
key?: Key | null | undefined;
slot?: string | undefined | undefined;
title?: string | undefined | undefined;
defaultChecked?: boolean | undefined | undefined;
defaultValue?: string | number | readonly string[] | undefined;
suppressContentEditableWarning?: boolean | undefined | undefined;
accessKey?: string | undefined | undefined;
autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {}) | undefined;
autoFocus?: boolean | undefined | undefined;
contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
contextMenu?: string | undefined | undefined;
dir?: string | undefined | undefined;
draggable?: (boolean | "true" | "false") | undefined;
enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined | undefined;
hidden?: boolean | undefined | undefined;
nonce?: string | undefined | undefined;
spellCheck?: (boolean | "true" | "false") | undefined;
translate?: "yes" | "no" | undefined | undefined;
radioGroup?: string | undefined | undefined;
about?: string | undefined | undefined;
content?: string | undefined | undefined;
datatype?: string | undefined | undefined;
inlist?: any;
prefix?: string | undefined | undefined;
property?: string | undefined | undefined;
rel?: string | undefined | undefined;
resource?: string | undefined | undefined;
rev?: string | undefined | undefined;
typeof?: string | undefined | undefined;
vocab?: string | undefined | undefined;
autoCorrect?: string | undefined | undefined;
autoSave?: string | undefined | undefined;
itemProp?: string | undefined | undefined;
itemScope?: boolean | undefined | undefined;
itemType?: string | undefined | undefined;
itemID?: string | undefined | undefined;
itemRef?: string | undefined | undefined;
results?: number | undefined | undefined;
security?: string | undefined | undefined;
unselectable?: "on" | "off" | undefined | undefined;
inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined | undefined;
is?: string | undefined | undefined;
exportparts?: string | undefined | undefined;
part?: string | undefined | undefined;
'data-pr-tooltip'?: string | undefined | undefined;
'data-pr-disabled'?: boolean | undefined | undefined;
'data-pr-classname'?: string | undefined | undefined;
'data-pr-position'?: "top" | "bottom" | "left" | "right" | "mouse" | undefined | undefined;
'data-pr-my'?: string | undefined | undefined;
'data-pr-at'?: string | undefined | undefined;
'data-pr-event'?: "hover" | "focus" | "both" | undefined | undefined;
'data-pr-showevent'?: string | undefined | undefined;
'data-pr-hideevent'?: string | undefined | undefined;
'data-pr-mousetrack'?: boolean | undefined | undefined;
'data-pr-mousetracktop'?: number | undefined | undefined;
'data-pr-mousetrackleft'?: number | undefined | undefined;
'data-pr-showdelay'?: number | undefined | undefined;
'data-pr-updatedelay'?: number | undefined | undefined;
'data-pr-hidedelay'?: number | undefined | undefined;
'data-pr-autohide'?: boolean | undefined | undefined;
'data-pr-showondisabled'?: boolean | undefined | undefined;
ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined;
} & TextBaseProps & {
children?: ReactNode | undefined;
}, {
decorationColor?: keyof Colors;
}>>;

export declare function TradeFilledIcon(p: IconProps): JSX_2.Element;

export declare function TradeIcon(p: IconProps): JSX_2.Element;

export declare function TradingViewIcon(p: IconProps): JSX_2.Element;

export declare function TrendingDownIcon(p: IconProps): JSX_2.Element;

export declare function TrendingUpIcon(p: IconProps): JSX_2.Element;

export declare type TriggerType = 'click' | 'hover' | 'focus';

export declare function TrophyFillIcon(p: IconProps): JSX_2.Element;

export declare function TrophyGoldIcon(p: IconProps): JSX_2.Element;

export declare function TrophyIcon(p: IconProps): JSX_2.Element;

export declare function TrustWalletIcon(p: IconProps): JSX_2.Element;

export declare function TuneIcon(p: IconProps): JSX_2.Element;

export declare function TwitterIcon(p: IconProps): JSX_2.Element;

declare type Types = (typeof toastTypes)[keyof typeof toastTypes];

export declare function UnlockIcon(p: IconProps): JSX_2.Element;

export declare const useMatchBreakpoints: () => BreakpointChecks;

export declare const useModal: (modal: default_2.ReactNode, closeOnOverlayClick?: boolean, updateOnPropsChange?: boolean, modalId?: string) => [Handler, Handler];

export declare function useModalV2(): {
    onDismiss: () => void;
    onOpen: () => void;
    isOpen: boolean;
    setIsOpen: default_2.Dispatch<default_2.SetStateAction<boolean>>;
};

export declare type UseModalV2Props = ReturnType<typeof useModalV2>;

export declare const useToast: () => ToastContextApi;

export declare const useTooltip: (content: React.ReactNode, options?: TooltipOptions) => TooltipRefs;

export declare type Variant = (typeof variants)[keyof typeof variants];

declare type Variant_2 = (typeof variants_3)[keyof typeof variants_3];

declare type Variants = (typeof alertVariants)[keyof typeof alertVariants];

declare const variants: {
    readonly PRIMARY: "primary";
    readonly PRIMARY60: "primary60";
    readonly PRIMARY60_OUTLINE: "primary60Outline";
    readonly SECONDARY: "secondary";
    readonly TERTIARY: "tertiary";
    readonly TEXT: "text";
    readonly TEXT_PRIMARY_60: "textPrimary60";
    readonly DANGER: "danger";
    readonly DANGER_OUTLINE: "dangerOutline";
    readonly SUBTLE: "subtle";
    readonly SUCCESS: "success";
    readonly LIGHT: "light";
    readonly BUBBLEGUM: "bubblegum";
};

declare const variants_2: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly SUCCESS: "success";
    readonly TEXTDISABLED: "textDisabled";
    readonly TEXTSUBTLE: "textSubtle";
    readonly BINANCE: "binance";
    readonly FAILURE: "failure";
    readonly WARNING: "warning";
    readonly GRADIENTBOLD: "gradientBold";
    readonly SUCCESS_LOW_CONTRAST: "successLowContrast";
    readonly FAILURE_LOW_CONTRAST: "failureLowContrast";
    readonly TERTIARY: "tertiary";
    readonly PRIMARY60: "primary60";
};

declare const variants_3: {
    readonly WARNING: "warning";
    readonly WARNING60: "warning60";
    readonly DANGER: "danger";
    readonly SUCCESS: "success";
    readonly PRIMARY: "primary";
    readonly PRIMARY60: "primary60";
    readonly SECONDARY: "secondary";
    readonly SECONDARY60: "secondary60";
};

export declare function VerifiedIcon(p: IconProps): JSX_2.Element;

export declare function VisibilityOffIcon(p: IconProps): JSX_2.Element;

export declare function VisibilityOnIcon(p: IconProps): JSX_2.Element;

export declare function VolumeIcon(p: IconProps): JSX_2.Element;

export declare function VolumeOffIcon(p: IconProps): JSX_2.Element;

export declare function VolumeUpIcon(p: IconProps): JSX_2.Element;

export declare function VoteIcon(p: IconProps): JSX_2.Element;

export declare function WaitIcon(p: IconProps): JSX_2.Element;

export declare function WalletConnectIcon(p: IconProps): JSX_2.Element;

export declare function WalletFilledIcon(p: IconProps): JSX_2.Element;

export declare function WalletFilledV2Icon(p: IconProps): JSX_2.Element;

export declare function WalletIcon(p: IconProps): JSX_2.Element;

export declare function WalletRegisterIcon(p: IconProps): JSX_2.Element;

export declare function WarningIcon(p: IconProps): JSX_2.Element;

export declare function WaterIcon(p: IconProps): JSX_2.Element;

export declare function WithdrawIcon(p: IconProps): JSX_2.Element;

export declare const XCircleIcon: typeof CloseCircleIcon;

export declare function YoutubeIcon(p: IconProps): JSX_2.Element;

export declare function ZapIcon(p: IconProps): JSX_2.Element;

export declare function ZkEVMIcon(p: IconProps): JSX_2.Element;

export declare function ZkSyncIcon(p: IconProps): JSX_2.Element;

export declare function ZoomInIcon(p: IconProps): JSX_2.Element;

export declare function ZoomOutIcon(p: IconProps): JSX_2.Element;

export { }
