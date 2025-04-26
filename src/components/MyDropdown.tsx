import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";


export default function MyDropdown() {
  return (
    <Menu>
      <MenuButton
      className="bg-amber-400 border border-amber-400 rounded-md px-4 py-2">Open</MenuButton>
      <MenuItems>
        <MenuItem>
          <span onClick={() => alert('test1')}>test1</span>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
