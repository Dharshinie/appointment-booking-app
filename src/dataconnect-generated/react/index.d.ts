import { CreateUserData, ListServiceProvidersData, UpdateAvailabilityData, UpdateAvailabilityVariables, GetMyReviewsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useListServiceProviders(options?: useDataConnectQueryOptions<ListServiceProvidersData>): UseDataConnectQueryResult<ListServiceProvidersData, undefined>;
export function useListServiceProviders(dc: DataConnect, options?: useDataConnectQueryOptions<ListServiceProvidersData>): UseDataConnectQueryResult<ListServiceProvidersData, undefined>;

export function useUpdateAvailability(options?: useDataConnectMutationOptions<UpdateAvailabilityData, FirebaseError, UpdateAvailabilityVariables>): UseDataConnectMutationResult<UpdateAvailabilityData, UpdateAvailabilityVariables>;
export function useUpdateAvailability(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateAvailabilityData, FirebaseError, UpdateAvailabilityVariables>): UseDataConnectMutationResult<UpdateAvailabilityData, UpdateAvailabilityVariables>;

export function useGetMyReviews(options?: useDataConnectQueryOptions<GetMyReviewsData>): UseDataConnectQueryResult<GetMyReviewsData, undefined>;
export function useGetMyReviews(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyReviewsData>): UseDataConnectQueryResult<GetMyReviewsData, undefined>;
