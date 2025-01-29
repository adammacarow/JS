def findLeaders(arr):
    n = len(arr)
    leaders = []
    
    # Elemen paling kanan selalu menjadi leader
    max_from_right = arr[n-1]
    leaders.append(max_from_right)
    
    # Mengecek setiap elemen dari kanan ke kiri
    for i in range(n-2, -1, -1):
        if arr[i] > max_from_right:
            leaders.append(arr[i])
            max_from_right = arr[i]
    
    # Mengembalikan leaders dalam urutan dari kiri ke kanan
    return leaders[::-1]

# Test cases
def testLeaders():
    # Test case 1
    arr1 = [9, 21, 8, 13, 3, 7, 5]
    print("Input:", arr1)
    print("Output:", *findLeaders(arr1))  # 21 13 7 5
    
    # Test case 2
    arr2 = [6, 14, 17, 3, 12, 4, 7]
    print("\nInput:", arr2)
    print("Output:", *findLeaders(arr2))  # 17 12 7

# Menjalankan test
testLeaders()