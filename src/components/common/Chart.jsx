import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useAllStudentsData } from '../../hooks/useStudent';




export const Chart = () => {
  const { data, isLoading } = useAllStudentsData();

  if (isLoading) return <p>Loading Chart...</p>;

  const studentsList = data?.data || [];

  const counts = studentsList.reduce((acc, student) => {
    const course = student.course;
    if (course) {
      acc[course] = (acc[course] || 0) + 1;
    }
    return acc;
  }, {});

  const chartData = Object.keys(counts).map(key => ({
    courseName: key,
    count: counts[key]
  }));

  if (chartData.length === 0) return <p>No course data available</p>;

  return (
    <ResponsiveContainer width="100%" className={"h-full"}>
      <BarChart data={chartData}>
        <XAxis dataKey="courseName" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#888" />
      </BarChart>
    </ResponsiveContainer>
  );
};
