import React, { FunctionComponent, ReactElement } from "react";
import { useTranslation } from "../../components/i18n/i18n.hook";
import { observer } from "mobx-react";

import { getDisplayName } from "./hoc.helpers";

export function withI18n<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: FunctionComponent<T>
): FunctionComponent<T> {
  const WithI18n: FunctionComponent<T> = observer((props: T): ReactElement => {
    const { adapter } = useTranslation();

    if (adapter.isLoading()) {
      return <></>;
    }
    return <WrappedComponent {...props} />;
  });
  WithI18n.displayName = `WithI18n(${getDisplayName(WrappedComponent)})`;

  return WithI18n;
}
