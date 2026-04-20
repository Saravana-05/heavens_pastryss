import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const defaultProps = (size?: number): React.SVGProps<SVGSVGElement> => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: size || 24,
  height: size || 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const IconCheck = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><path d="M20 6 9 17l-5-5" /></svg>
);

export const IconX = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

export const IconChevronDown = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><path d="m6 9 6 6 6-6" /></svg>
);

export const IconChevronUp = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><path d="m18 15-6-6-6 6" /></svg>
);

export const IconChevronLeft = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><path d="m15 18-6-6 6-6" /></svg>
);

export const IconChevronRight = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><path d="m9 18 6-6-6-6" /></svg>
);

export const IconCircle = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><circle cx="12" cy="12" r="10" /></svg>
);

export const IconDot = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>
);

export const IconSearch = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

export const IconMoreHorizontal = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /><circle cx="5" cy="12" r="1" fill="currentColor" /></svg>
);

export const IconGripVertical = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><circle cx="9" cy="12" r="1" fill="currentColor" /><circle cx="9" cy="5" r="1" fill="currentColor" /><circle cx="9" cy="19" r="1" fill="currentColor" /><circle cx="15" cy="12" r="1" fill="currentColor" /><circle cx="15" cy="5" r="1" fill="currentColor" /><circle cx="15" cy="19" r="1" fill="currentColor" /></svg>
);

export const IconPanelLeft = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /></svg>
);

export const IconArrowLeft = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
);

export const IconArrowRight = ({ size, className, ...props }: IconProps) => (
  <svg {...defaultProps(size)} className={className} {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);
