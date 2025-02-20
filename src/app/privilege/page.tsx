"use client";
import { useState, useEffect } from "react";
import { Product, Activities } from "@/types";
import ActivitiesBox from "@/components/ActivitiesBox";
import PTCard from "@/components/PTCard";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import Button from "@/components/Button";
import * as motion from "motion/react-client";


export default function Page() {
  const [products, set_products] = useState<Product[]>([]);

  const [selected_category, set_selected_category] = useState<string | null>(
    null
  );

  const [points, set_points] = useState<number>(0);

  const [activities, set_activities] = useState<Activities[]>([]);

  const generate_random_points = (): void => {
    const random_points = Math.floor(Math.random() * 1000000);
    set_points(random_points);
  };

  useEffect(() => {
    async function fetch_data() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        const productList: Product[] = data.products;
        set_products(productList);
        // console.log(productList);
      } catch (error) {
        console.log("error fetching data", error);
      }
    }
    fetch_data();
    generate_random_points();
  }, []);

  useEffect(() => {
    const saved_activities = localStorage.getItem("activities");
    if (saved_activities) {
      set_activities(JSON.parse(saved_activities));
    }
  }, []);

  useEffect(() => {
    if (activities.length > 0) {
      localStorage.setItem("activities", JSON.stringify(activities));
    }
  }, [activities]);

  const redeem_product = (productPrice: number) => {
    if (productPrice > points) {
      alert("Sorry your points are not enough :(");
      return;
    }
    set_points(points - productPrice);
    const new_activity = {
      description: "Redeemed a product",
      points: productPrice,
      date: new Date().toLocaleString(),
    };
    set_activities([new_activity, ...activities]);
  };

  const filtered_products = selected_category
    ? products.filter((product) => product.category === selected_category)
    : products;

  return (
    <div className="container flex flex-col justify-center items-center my-24 gap-4">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8 xl:gap-4">
        <div className="w-full lg:w-3/5 flex flex-col gap-4 xl:pe-28">
          <motion.h2
            initial={{ y: "-20%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
            }}
            className="text-2xl font-bold text-text2"
          >
            Privileges
          </motion.h2>
          <PTCard points={points} />
        </div>
        <motion.div
          initial={{ x: "10%", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 1, duration: 0.8, ease: "easeIn" },
          }}
          className="w-full lg:w-2/5 flex flex-col gap-6 lg:gap-4"
        >
          <SearchBar />
          <ActivitiesBox activities={activities} />
          <div
            className={`${
              activities.length < 1 ? "hidden" : "flex justify-end items-center"
            } `}
          >
            <button className="text-text text-base font-medium text-center w-16 h-6">
              See all
            </button>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col gap-2">
        <motion.h3
          initial={{ y: "-20%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 1, duration: 0.8, ease: "easeIn" },
          }}
          className="text-base font-semibold text-text2"
        >
          Privilege for you
        </motion.h3>
        <Button onCategorySelect={set_selected_category} />
        <motion.div
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 1.2, duration: 0.8, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-6 py-4"
        >
          {filtered_products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              thumbnail={product.thumbnail}
              redeemProduct={redeem_product}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
