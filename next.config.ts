import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Aquí van tus opciones de configuración
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ Omitir errores ESLint en builds
  },
};

export default nextConfig;