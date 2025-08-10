
import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface PillarItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProductItem {
  image: string;
  title: string;
  description: string;
  href: string;
}
