`npm install`

# 📁 Proyectos Full Stack – React + Node.js
Este repositorio reúne mis proyectos full stack construidos para dominar React en frontend y Node.js en backend. Cada proyecto incluye su API propia y está listo para ejecutarse localmente.

| Proyecto | Frontend | Backend | Descripción                                   |
| -------- | -------- | ------- | --------------------------------------------- |
| Devtree  | ✅        | ✅       | Gestor de enlaces sociales + imagen de perfil |
| Heroes   | ✅        | ✅       | Explorador DC/Marvel con filtros y paginación |
| Store    | ✅        | ✅       | Ecommerce con panel administrativo completo   |

```
Proyectos_2/
├─ devtree/           # Frontend enlaces sociales
├─ devtree-backend/   # API gestión usuarios/imágenes
├─ heroes/            # Frontend personajes cómics
├─ heroes-backend/    # API datos personajes
├─ store/             # Frontend ecommerce
└─ store-backend/     # API productos + autenticación
```

## 🚀 Quick Start
### 1. Clonar
```
git clone https://github.com/FranDev99/Proyectos_2.git
```

### 2. Para cualquier proyecto (ejemplo: devtree)
```
cd devtree 
npm install
npm run dev         Frontend
npm run start:dev   Backend (si aplica)
```

## 📋 Detalle de proyectos
### Devtree – Gestor de enlaces personales

>[!NOTE]
>Página tipo "Linktree" para centralizar redes sociales.

### Características:

✅ Lista editable de enlaces

✅ Subida de imagen de perfil (Cloudinary)

✅ Descripción personalizada

✅ Diseño tipo tarjeta compartible

### Heroes – Explorador DC/Marvel

>[!TIP]
>Perfecto para practicar filtros, paginación y rutas dinámicas.

### Características:

✅ Paginación infinita

✅ Filtros por editorial/categoría

✅ Vista detalle personaje

✅ 20+ personajes mockeados

✅ Busqueda de personajes

### Store – Ecommerce + Admin Panel

>[!WARNING]
>Sin pasarela de pagos real (solo simulación).

### Características:

✅ Catálogo con filtros

✅ Login de usuarios

✅ Panel Admin completo:

| Gestión	| Funcionalidades |
|---------|-----------------|
| Productos |	CRUD completo |
| Imágenes |	Subida/múltiples |
| Inventario |	Stock + tallas |
| Precios |	Edición dinámica |

## 🛠️ Tech Stack
```
Frontend:
├── React + Vite
├── TypeScript
├── Tailwind CSS
└── React Router

Backend:
├── Node.js + Express/Nest.js
├── TypeScript
├── Cloudinary (imágenes)
└── MongoDB/PostgreSQL
```

## ✅ Buenas prácticas aplicadas

- Arquitectura separada FE/BE
- TypeScript en todos los proyectos
- Hooks personalizados + custom services
- Componentes reutilizables
- Git Flow con commits descriptivos
