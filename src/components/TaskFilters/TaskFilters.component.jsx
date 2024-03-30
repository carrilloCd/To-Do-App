import { FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton } from './FiltersContainer.component'

export const TaskFilters = ({
  total,
  showAllTask,
  showActiveTask,
  showCompletedTask,
  handleClearComplete,
  activeFilter
}) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={total} />
      <FilterButtonContainer>
        <FilterButton action={() => { showAllTask() }} filter='All' active={activeFilter} />
        <FilterButton action={() => { showActiveTask() }} filter='Active' active={activeFilter} />
        <FilterButton action={() => { showCompletedTask() }} filter='Completed' active={activeFilter} />
      </FilterButtonContainer>

      <button onClick={() => handleClearComplete()} className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in'>
        Clear Completed
      </button>
    </FiltersContainer>
  )
}
