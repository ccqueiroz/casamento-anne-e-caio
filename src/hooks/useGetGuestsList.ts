import { useQuery } from 'react-query'
import { actionDashboard } from '../services/dashboard';

const useGetGuestsList = () => {
    const queryResults = useQuery(
    ['action-byId'],
    async () => await actionDashboard.guestsList(),
    {
      staleTime: 1000 * 60 * 15, //15 minutos
    }
    )
    return {
        guestsList: queryResults?.data?.guest,
        ...queryResults,
  }
}

export { useGetGuestsList }
