import { useEffect, useState } from 'react';
import { getRolesApi } from '../services/roleService';
import type { Role } from '../types/user';

export function useRoles(open: boolean) {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;

    setLoading(true);
    getRolesApi()
      .then((res) => setRoles(res.data.role || []))
      .finally(() => setLoading(false));
  }, [open]);

  return { roles, loading };
}
