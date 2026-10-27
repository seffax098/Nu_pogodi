import cn from 'classnames';
import type { ButtonHTMLAttributes, PointerEvent } from 'react';

export interface PressButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onPointerDown' | 'onClick'> {
  onPress: () => void;
  pressed?: boolean;
  pressedClassName?: string;
}

export const PressButton = ({ onPress, pressed, pressedClassName, className, ...props }: PressButtonProps) => (
  <button
    {...props}
    type="button"
    className={cn(className, pressed && pressedClassName)}
    onPointerDown={(event: PointerEvent<HTMLButtonElement>) => {
      event.preventDefault();
      onPress();
    }}
  />
);
