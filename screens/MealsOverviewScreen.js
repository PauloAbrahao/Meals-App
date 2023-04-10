import React from 'react';
import { StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(categoryId);
  });

  React.useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <MealsList displayedMeals={displayedMeals} />
  )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
