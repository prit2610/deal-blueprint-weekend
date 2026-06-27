const BASE =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD
    ? "https://app.encodingcareers.com"
    : "http://localhost:3000");

async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    let msg = `${res.status} ${res.statusText}`;
    try {
      const body = await res.json();
      msg = body.error || body.message || msg;
    } catch {
      /* empty */
    }
    throw new Error(msg);
  }

  return res.json() as Promise<T>;
}

export interface LeadRegistrationBody {
  name: string;
  email: string;
  phone?: string;
  source: string;
  notes?: string;
}

export interface LeadRegistrationResponse {
  id: number;
  email: string;
}

export const leadApi = {
  register: (body: LeadRegistrationBody) =>
    apiFetch<{ success: true; data: LeadRegistrationResponse }>(
      "/api/v1/leads/register",
      { method: "POST", body: JSON.stringify(body) },
    ),
};
