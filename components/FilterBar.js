import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

function FilterBar({ selectedFilter, handleCategoryPress }) {
  const categoryData = [
    { name: 'Dairy', filter: 'dairy' },
    { name: 'Medicines', filter: 'medicine' },
    { name: 'Fruits', filter: 'fruit' },
    { name: 'Poultry', filter: 'poultry' },
    { name: 'Vegan', filter: 'vegan' },
    { name: 'Dessert', filter: 'dessert' },
    { name: 'Bakery', filter: 'bakery' },
    // Add more category items as needed
  ];
  return (
    <View style={styles.categoryBox}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.categorySection}
        showsHorizontalScrollIndicator={false}
      >
        {categoryData.map((categoryInfo) => (
          <TouchableOpacity
            key={categoryInfo.filter}
            style={[
              styles.categoryItem,
              selectedFilter === categoryInfo.filter && styles.selectedCategory,
            ]}
            onPress={() => handleCategoryPress(categoryInfo.filter)}
          >
            <Text style={styles.categoryText}>
              {categoryInfo.name}{' '}
              {selectedFilter === categoryInfo.filter && 'X'}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default FilterBar;

const styles = StyleSheet.create({
  categoryBox: {
    // backgroundColor: '#F2F2F2',
    // paddingVertical: 16,
    paddingHorizontal: 8,
    // marginBottom: 16,
  },
  categorySection: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 16,
    marginVertical: 8,
  },
  categoryItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#DDDDDD',
    marginRight: 8,
  },
  selectedCategory: {
    backgroundColor: '#999999',
  },
  categoryText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
