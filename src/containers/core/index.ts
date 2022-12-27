import { ContainerModule } from "inversify";
import { I18nextAdapter } from "./adapters/i18next/i18next.adapter";
import { I18nType } from "./i18n/i18n.constants";

export const coreModules = new ContainerModule((bind) => {
  bind(I18nType).to(I18nextAdapter).inSingletonScope();
});
