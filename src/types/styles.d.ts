declare module 'styled-components' {
  export type DefaultTheme = AppTheme;
}

/**
 * Responsive 속성
 * CSS 속성값을 브레이크 포인트별로 설정할 수 있다.
 * T 는 CSS 속성값의 타입
 */
export type ResponsiveProp<T> = {
  base?: T; // 기본값
  sm?: T; // 640px 이상
  md?: T; // 768px 이상
  lg?: T; // 1024px 이상
  xl?: T; // 1280px 이상
};

export type Responsive<T> = T | ResponsiveProp<T>;

/**
 * Flex
 */
type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start';

type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start';

type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch';

type CssPropertyGlobals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset';

export type CSSPropertyAlignItems =
  | CssPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'normal'
  | 'stretch';

export type CSSPropertyAlignContent =
  | CssPropertyGlobals
  | ContentDistribution
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start'
  | 'baseline'
  | 'normal';

export type CSSPropertyJustifyItems =
  | CssPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch';

export type CSSPropertyJustifyContent =
  | CssPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'right'
  | 'normal';

export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse';

export type CSSPropertyFlexDirection =
  | CssPropertyGlobals
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';

export type CSSPropertyJustifySelf =
  | CssPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch';

export type CSSPropertyAlignSelf =
  | CssPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'normal'
  | 'stretch';

/**
 * Grid
 */
type GridLine = 'auto';

export type CSSPropertyGridColumn = CssPropertyGlobals | GridLine;

export type CSSPropertyGridRow = CssPropertyGlobals | GridLine;

export type CSSPropertyGridAutoFlow =
  | CssPropertyGlobals
  | 'column'
  | 'dense'
  | 'row';

export type CSSPropertyGridArea = CssPropertyGlobals | GridLine;
