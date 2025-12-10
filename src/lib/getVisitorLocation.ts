export type VisitorLocation = {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  latitude?: number | null;
  longitude?: number | null;
};

// NOTE: free public services have rate limits; replace with your preferred provider.
export async function getVisitorLocation(): Promise<VisitorLocation | null> {
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (!res.ok) return null;
    const data = await res.json();
    return {
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country_name,
      latitude: data.latitude ?? null,
      longitude: data.longitude ?? null,
    };
  } catch (e) {
    return null;
  }
}
