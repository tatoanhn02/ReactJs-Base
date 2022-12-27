import { FunctionComponent } from "react";

export function getDisplayName<T>(
  WrappedComponent: FunctionComponent<T>
): string {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
