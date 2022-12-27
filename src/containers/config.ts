/* eslint-disable max-classes-per-file */
import type { interfaces } from "inversify";
import * as inversify from "inversify";
export class Container extends inversify.Container {}

export type ServiceIdentifier<T> = interfaces.ServiceIdentifier<T>;

export const Injectable = inversify.injectable;
