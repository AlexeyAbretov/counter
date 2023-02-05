import styled from 'styled-components';
import {
    space,
    color,
    layout,
    typography,
    flexbox,
    border,
    background,
    position,
    grid,
    boxShadow,
    compose,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    TypographyProps,
    variant,
    style,
} from 'styled-system';

export const cursor = style({
  prop: 'cursor',
  cssProperty: 'cursor',
});

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  TypographyProps &
  ShadowProps & {
    cursor?: string;
    variant?: string;
  }

export const Box = styled.div<BoxProps>`
  ${compose(
    space,
    color,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    boxShadow,
    typography,
    cursor,
    variant
  )}
`;

export const BasicButton = styled(Box.withComponent('button')).attrs((props) => ({
    type: props?.type || 'button',
}))`
  ${variant({
      variants: {
        hover: {
          '&:hover': {
            opacity: 0.5
          }
        },
      }
    })}
  `;
