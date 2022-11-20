import { createSelector } from "@reduxjs/toolkit";

export const selectCountries = state => state.countries;

export const selectIsLoading = state => state.countries.isLoading;

export const selectIsLoadingHolidays = state => state.holidays.isLoading;

export const selectError = state => state.countries.error;

export const selectFilter = filter => filter.filter;

export const selectHolidays = state => state.holidays.holidays;

export const selectSortBy = state => state.countries.sortBy;

export const visibleCountries = createSelector(
  [selectCountries, selectFilter],
  (countries, filter) => {
      return countries.countries.filter(country =>
        country?.name?.toLowerCase()?.includes(filter),
      );
  }
);

