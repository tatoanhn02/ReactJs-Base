import { Container } from "../../../containers/config";

export interface ContainerContext {
  container: Container | null;
}

export interface IoCProps {
  container: Container;
  children: React.ReactNode | React.ReactNode[];
}
