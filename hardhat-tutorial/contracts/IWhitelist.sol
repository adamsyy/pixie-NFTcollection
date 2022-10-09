// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17;

interface IWhitelist {
    function whitelistedAddresses(address) external view returns (bool);
}