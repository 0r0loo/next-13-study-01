import { theme } from '@/themes';
import { Responsive, ResponsiveProp } from '@/types/styles';

// Theme type
export type AppTheme = typeof theme;

type SpaceThemeKeys = keyof AppTheme['space'];
type ColorThemeKeys = keyof AppTheme['colors'];
type FontSizeThemeKeys = keyof AppTheme['fontSizes'];
type LetterSpacingThemeKeys = keyof AppTheme['letterSpacings'];
type LineHeightThemeKeys = keyof AppTheme['lineHeights'];

// 각 Theme 의 키의 타입
export type Space = SpaceThemeKeys;
export type Color = ColorThemeKeys;
export type FontSize = FontSizeThemeKeys;
export type LetterSpacing = LetterSpacingThemeKeys;
export type LineHeight = LineHeightThemeKeys;

// 브레이크 포인트
const BREAKPOINTS: { [key: string]: string } = {
  sm: '640px', // 640px 이상
  md: '768px', // 768px 이상
  lg: '1024px', // 1024px 이상
  xl: '1280px', // 1280px 이상
};

export function toPropValue<T>(
  propKey: string,
  prop?: Responsive<T>,
  theme?: AppTheme,
) {
  if (prop === undefined) {
    return undefined;
  }

  if (isResponsivePropType(prop)) {
    const result = [];
    for (const responsiveKey in prop) {
      if (responsiveKey === 'base') {
        // 기본 스타일
        result.push(
          `${propKey}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme,
          )};`,
        );
      } else if (
        responsiveKey === 'sm' ||
        responsiveKey === 'md' ||
        responsiveKey === 'lg' ||
        responsiveKey === 'xl'
      ) {
        // 브레이크 포인트별 스타일
        result.push(
          `@media (min-width: ${
            BREAKPOINTS[responsiveKey]
          }) { ${propKey}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme,
          )}; }`,
        );
      }
    }
    return result.join('\n');
  }
  return `${propKey}: ${toThemeValueIfNeeded(propKey, prop, theme)};`;
}

const SPACE_KEYS = new Set([
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
]);

const COLOR_KEYS = new Set(['color', 'background-color']);
const FONT_SIZE_KEYS = new Set(['font-size']);
const LINE_SPACING_KEYS = new Set(['letter-spacing']);
const LINE_HEIGHT_KEYS = new Set(['line-height']);

/**
 * Theme 에 지정된 CSS 속성값으로 변환
 * @param propKey CSS 속성
 * @param value CSS 속성값
 * @param theme AppTheme
 * @returns CSS 속성값
 */
function toThemeValueIfNeeded<T>(propKey: string, value: T, theme?: AppTheme) {
  if (
    theme &&
    theme.space &&
    SPACE_KEYS.has(propKey) &&
    isSpaceThemeKeys(value, theme)
  ) {
    return theme.space[value];
  }

  if (
    theme &&
    theme.colors &&
    COLOR_KEYS.has(propKey) &&
    isColorThemeKeys(value, theme)
  ) {
    return theme.colors[value];
  }

  if (
    theme &&
    theme.fontSizes &&
    FONT_SIZE_KEYS.has(propKey) &&
    isFontSizeThemeKeys(value, theme)
  ) {
    return theme.fontSizes[value];
  }

  if (
    theme &&
    theme.letterSpacings &&
    LINE_SPACING_KEYS.has(propKey) &&
    isLetterSpacingThemeKeys(value, theme)
  ) {
    return theme.letterSpacings[value];
  }

  if (
    theme &&
    theme.lineHeights &&
    LINE_HEIGHT_KEYS.has(propKey) &&
    isLineHeightThemeKeys(value, theme)
  ) {
    return theme.lineHeights[value];
  }

  return value;
}

function isResponsivePropType<T>(prop: any): prop is ResponsiveProp<T> {
  return (
    prop &&
    (prop.base !== undefined ||
      prop.sm !== undefined ||
      prop.md !== undefined ||
      prop.lg !== undefined ||
      prop.xl !== undefined)
  );
}

function isSpaceThemeKeys(prop: any, theme: AppTheme): prop is SpaceThemeKeys {
  return Object.keys(theme.space).filter((key) => key == prop).length > 0;
}

function isColorThemeKeys(prop: any, theme: AppTheme): prop is ColorThemeKeys {
  return Object.keys(theme.colors).filter((key) => key == prop).length > 0;
}

function isFontSizeThemeKeys(
  prop: any,
  theme: AppTheme,
): prop is FontSizeThemeKeys {
  return Object.keys(theme.fontSizes).filter((key) => key == prop).length > 0;
}

function isLetterSpacingThemeKeys(
  prop: any,
  theme: AppTheme,
): prop is LetterSpacingThemeKeys {
  return (
    Object.keys(theme.letterSpacings).filter((key) => key == prop).length > 0
  );
}
function isLineHeightThemeKeys(
  prop: any,
  theme: AppTheme,
): prop is LineHeightThemeKeys {
  return Object.keys(theme.lineHeights).filter((key) => key == prop).length > 0;
}
