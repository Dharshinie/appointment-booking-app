import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Appointment_Key {
  id: UUIDString;
  __typename?: 'Appointment_Key';
}

export interface Availability_Key {
  id: UUIDString;
  __typename?: 'Availability_Key';
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface GetMyReviewsData {
  reviews: ({
    id: UUIDString;
    comment?: string | null;
    rating: number;
    serviceProvider?: {
      name: string;
    };
      appointment?: {
        appointmentDate: DateString;
      };
  } & Review_Key)[];
}

export interface ListServiceProvidersData {
  serviceProviders: ({
    id: UUIDString;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  } & ServiceProvider_Key)[];
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface ServiceProvider_Key {
  id: UUIDString;
  __typename?: 'ServiceProvider_Key';
}

export interface Service_Key {
  id: UUIDString;
  __typename?: 'Service_Key';
}

export interface UpdateAvailabilityData {
  availability_update?: Availability_Key | null;
}

export interface UpdateAvailabilityVariables {
  id: UUIDString;
  isBooked: boolean;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface ListServiceProvidersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListServiceProvidersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListServiceProvidersData, undefined>;
  operationName: string;
}
export const listServiceProvidersRef: ListServiceProvidersRef;

export function listServiceProviders(): QueryPromise<ListServiceProvidersData, undefined>;
export function listServiceProviders(dc: DataConnect): QueryPromise<ListServiceProvidersData, undefined>;

interface UpdateAvailabilityRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAvailabilityVariables): MutationRef<UpdateAvailabilityData, UpdateAvailabilityVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateAvailabilityVariables): MutationRef<UpdateAvailabilityData, UpdateAvailabilityVariables>;
  operationName: string;
}
export const updateAvailabilityRef: UpdateAvailabilityRef;

export function updateAvailability(vars: UpdateAvailabilityVariables): MutationPromise<UpdateAvailabilityData, UpdateAvailabilityVariables>;
export function updateAvailability(dc: DataConnect, vars: UpdateAvailabilityVariables): MutationPromise<UpdateAvailabilityData, UpdateAvailabilityVariables>;

interface GetMyReviewsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyReviewsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyReviewsData, undefined>;
  operationName: string;
}
export const getMyReviewsRef: GetMyReviewsRef;

export function getMyReviews(): QueryPromise<GetMyReviewsData, undefined>;
export function getMyReviews(dc: DataConnect): QueryPromise<GetMyReviewsData, undefined>;

