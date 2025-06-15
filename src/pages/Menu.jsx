// src/pages/Menu.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase"; // firebase config của bạn
import { collection, getDocs } from "firebase/firestore";

function Menu() {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const catSnapshot = await getDocs(collection(db, "categories"));
      const foodSnapshot = await getDocs(collection(db, "foods"));

      const catList = catSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const foodList = foodSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      console.log("Categories:", catList); // 👈 thêm dòng này
      console.log("Foods:", foodList);     // 👈 thêm dòng này
      setCategories(catList);
      setFoods(foodList);
    };
    fetchData();
  }, []);

  return (
  <div className="p-6">
    <h1 className="mb-6 text-2xl font-bold">MENU</h1>
    {categories.map(cat => (
      <div key={cat.id} className="grid grid-cols-5 gap-4 mb-8" id={cat.id}>
        {/* 🟥 Cột 1: Tiêu đề danh mục */}
        <div className="col-span-1">
          <div className="w-full overflow-auto aspect-auto">
            <h2 className="object-cover text-xl font-semibold text-red-600">{cat.name || cat.Name}</h2>
          </div>          
        </div>

        {/* 🟩 Cột 2-4: Các món ăn thuộc category đó */}
        <div className="grid grid-cols-1 col-span-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {foods
            .filter(food => food.categoryId === cat.id)
            .sort((a, b) => a.order - b.order)
            //.slice(0, 3) // Giới hạn chỉ hiển thị 3 món
            .map(food => (
              <div 
                key={food.id} 
                className="p-2 rounded-lg shadow hover:shadow-md"
              >
                {/* Container ảnh giữ tỉ lệ 4:3 */}
                <div className="aspect-[2/1] w-full overflow-hidden rounded">
                  <img
                    src={food.imageURL?.replace(/^"|"$/g, "")}
                    alt={food.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Phần text nằm riêng, không bị ảnh hưởng bởi aspect-ratio */}
                <h3 className="mt-2 font-medium text-md">{food.Name}</h3>
                <p className="text-sm text-gray-500">{food.Price}</p>
              </div>
            ))}
        </div>
      </div>
    ))}
  </div>
);
}

export default Menu;