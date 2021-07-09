import 'react-native';
import React from 'react';
import { MoviesList } from '../../src/components/containers/MoviesList';

// Note: test renderer must be required after react-native.
import { renderWithRedux } from '../../jest/utils';
import * as services from '../../services/api/api';
import { movieMock as mock } from '../../jest/mocks';

describe('MoviesList', () => {
  it('should display pagination buttons', async () => {
    jest
      .spyOn(services.API, 'get')
      .mockResolvedValue({ data: { results: [mock] } });

    const { findByText } = renderWithRedux(<MoviesList filter="" />);
    const buttonNext = await findByText(/next/i);
    const buttonPrev = await findByText(/prev/i);

    expect(buttonNext).not.toBeNull();
    expect(buttonPrev).not.toBeNull();
  });

  it('should not be display pagination buttons', async () => {
    jest
      .spyOn(services.API, 'get')
      .mockResolvedValue({ data: { results: [] } });

    const { queryByText } = renderWithRedux(<MoviesList filter="" />);
    const buttonNext = await queryByText(/next/i);
    const buttonPrev = await queryByText(/prev/i);

    expect(buttonNext).toBeNull();
    expect(buttonPrev).toBeNull();
  });

  it('should display items', async () => {
    jest
      .spyOn(services.API, 'get')
      .mockResolvedValue({ data: { results: [mock] } });

    const { findAllByText } = renderWithRedux(<MoviesList filter="" />);
    const items = await findAllByText(/details/i);

    expect(items).toHaveLength(1);
  });

  it('should not display items', async () => {
    jest
      .spyOn(services.API, 'get')
      .mockResolvedValue({ data: { results: [] } });

    const { queryAllByText } = renderWithRedux(<MoviesList filter="" />);
    const items = await queryAllByText(/details/i);

    expect(items).toHaveLength(0);
  });
});
