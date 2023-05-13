import React from "react";
import clsx from "clsx";

/*
BUTTON VARIANTS

Primary, secondary, alternative
Icon, no icon
Large, small
Anchor link, form button
Disabled?

*/

// STYLING
const basic = "font-body uppercase border inline-block border-2 py-6 px-3";
// intent
const primary = "bg-blue text-white border-blue hover:bg-link hover:border-link active:bg-blue-75 active:border-blue-75";
const secondary = "bg-none text-blue border-blue hover:bg-blue hover:text-white hover:border-blue active:bg-blue-75 active:text-white active:border-blue-75";
const alternative = "border-white text-white";
// size
const large = "text-16";
const small = "text-14";

interface CommonProps {
  intent: "primary" | "secondary" | "alternative" | "disabled";
  size: "large" | "small";
  icon?: "arrow" | "filter" | "sort" | undefined;
  label: string;
  className?: string;
}

interface AnchorProps extends CommonProps {
  kind: "link";
  href: string;
  target?: "_blank" | "_self";
}

interface FormButtonProps extends CommonProps {
  kind: "submit";
}

type ButtonProps = AnchorProps | FormButtonProps;

function Button({ intent = "primary", size = "large", icon, label, className, ...props }: ButtonProps) {
  if (props.kind === "link") {
    const { href, kind, target, ...rest } = props;
    return (
      <a href={href} target={target} className={clsx(basic, intent === "primary" ? primary : intent === "secondary" ? secondary : alternative, size === "large" ? large : small)}>
        {label}
      </a>
    );
  }

  return <button>{label}</button>;
}

export default Button;
