import Titlebar from '@components/shared/Titlebar';
import { topSellingProductsData } from '@data/data';
import { TopSellingProductsDataTypes } from '@type/Types';
import React from 'react';

function TopSellingProducts() {
  return (
    <div className="bg-theme-base-2 rounded-xl padding-1 h-max">
      <Titlebar title="Top Selling Products" smallTitle="" />
      <div className="space-y-3">
        <div className="flex items-center gap-x-1">
          <p className="w-[45%]">Item Full Name</p>
          <p className="w-max">Quantity</p>
          <p className="flex-1 text-end">Sales Order</p>
        </div>

        <div>
          {topSellingProductsData.map(
            (product: TopSellingProductsDataTypes, index: number) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-x-1 py-2 text-white border-b-[3px] border-b-theme-base-1 last:border-0"
                >
                  <p className="w-[45%] truncate">{product.productName}</p>
                  <p className="w-1/5 text-center">{product.quantity}</p>
                  <div className="flex-1 relative overflow-hidden">
                    <p className="relative z-10 text-end px-1">
                      ${product.salesOrder}K
                    </p>
                    <div
                      style={{ width: '100%' }}
                      className="absolute top-0 right-0 bg-primary h-full"
                    ></div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default TopSellingProducts;
