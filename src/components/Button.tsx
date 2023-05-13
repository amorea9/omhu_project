import React from "react";

/*
BUTTON VARIANTS

Primary, secondary, alternative
Icon, no icon
Large, small
Anchor link, form button
Disabled?

*/

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
      <a href={href} target={target} className="bg-blue text-white">
        {label}
      </a>
    );
  }

  return <button>{label}</button>;
}

export default Button;
