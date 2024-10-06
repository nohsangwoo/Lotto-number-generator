"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DisplayLudgi from "./components/DisplayLudgi";

const getBackgroundColor = (num: number) => {
  if (num <= 9) return "bg-yellow-400";
  if (num <= 19) return "bg-blue-400";
  if (num <= 29) return "bg-red-400";
  if (num <= 39) return "bg-gray-400";
  return "bg-green-400";
};

export default function Home() {
  const [count, setCount] = useState(1);
  const [numbers, setNumbers] = useState<number[][]>([]);

  const generateLottoNumbers = () => {
    const newNumbers = [];
    for (let i = 0; i < count; i++) {
      const set = new Set<number>();
      while (set.size < 7) {
        set.add(Math.floor(Math.random() * 45) + 1);
      }
      newNumbers.push(Array.from(set).sort((a, b) => a - b));
    }
    setNumbers(newNumbers);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 text-center"
      >
        로또 번호 생성기
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg p-4 sm:p-6 shadow-lg mb-4 sm:mb-8 w-full max-w-md"
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          생성할 로또 번호 세트 수:
        </label>
        <div className="flex items-center">
          <input
            type="number"
            min="1"
            max="10"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateLottoNumbers}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline whitespace-nowrap"
          >
            번호 생성
          </motion.button>
        </div>
      </motion.div>

      <div className="w-full max-w-md">
        {numbers.map((set, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg p-4 shadow-lg mb-4"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {set.slice(0, 6).map((num, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
                  className={`w-10 h-10 rounded-full ${getBackgroundColor(num)} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {num}
                </motion.div>
              ))}
              <span className="flex items-center text-gray-400 mx-1">+</span>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
                className={`w-10 h-10 rounded-full ${getBackgroundColor(set[6])} flex items-center justify-center text-white font-bold text-lg`}
              >
                {set[6]}
              </motion.div>
            </div>
            <p className="text-center text-gray-600 mt-2">당첨번호</p>
          </motion.div>
        ))}
      </div>

      <DisplayLudgi />
    </div>
  );
}
