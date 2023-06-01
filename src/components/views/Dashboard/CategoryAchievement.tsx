'use client';
import IconBox from '@components/shared/IconBox';
import Progressbar from '@components/shared/Progressbar';
import Titlebar from '@components/shared/Titlebar';
import { categoryAchievementData } from '@data/data';
import { CategoryAchievementDataTypes } from '@type/Types';
import React from 'react';

function CategoryAchievement() {
  return (
    <div className="bg-theme-base-2 padding-1 rounded-xl h-max">
      <Titlebar title="Category Achievement" smallTitle="select all" />
      <div className="space-y-5">
        {categoryAchievementData.map(
          (category: CategoryAchievementDataTypes, index: number) => {
            return (
              <div key={index} className="flex gap-x-5 items-center">
                <IconBox Icon={category.Icon} />
                <div className="flex-1">
                  <Progressbar
                    achievementAmount={category.achievementAmount}
                    targetAmount={category.targetAmount}
                    text={category.productName}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default CategoryAchievement;
